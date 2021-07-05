import axios from 'axios'
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import UpdateForm from './UpdateForm'

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            show: false,
            idx: -1
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:8000/art/favorite`).then(response => {
            this.setState({
                favData: response.data
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    removeFav = (idx) => {
        axios.delete(`http://localhost:8000/art/favorite/${idx}`).then(response => {
            this.setState({
                favData: response.data
            })
        }).catch(error => {
            console.log(error.message)
        })
    }
    handleShow = (idx) => {
        this.setState({
            idx: idx,
            show: true
        })
    }
    handleClose = () => {

        this.setState({
            show: false
        })
    }

    gettingData = async (e) => {
        console.log('reqbody')

        e.preventDefault();
        const reqbody = {
            title: e.target.title.value,
            artist_title: e.target.artist.value
        }
        console.log('reqbody', reqbody)
        await axios.put(`http://localhost:8000/art/favorite/${this.state.idx}`, reqbody).then(response => {
            this.setState({
                favData: response.data
            })
        }).catch(error => {
            console.log(error.message)
        })
        this.handleClose();
    }
    render() {
        return (
            <div>
                {
                    this.state.favData.map((item, idx) => {
                        return <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.credit_line}</Card.Text>
                                <Card.Text>{item.artist_title}</Card.Text>
                                <Button onClick={() => this.removeFav(idx)} variant="primary">delete</Button>
                                <Button onClick={() => this.handleShow(idx)} variant="primary">update</Button>
                            </Card.Body>
                        </Card>
                    })

                }
                <UpdateForm
                    show={this.state.show}
                    updateFav={this.updateFav}
                    handleClose={this.handleClose}
                    gettingData={this.gettingData}
                />

            </div>
        )
    }
}

export default Favorite
