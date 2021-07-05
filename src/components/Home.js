import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullData: []
        }
    }
    componentDidMount = async () => {
        await axios.get(`http://localhost:8000/art`).then(response => {
            this.setState({
                fullData: response.data
            })
            console.log(this.state.fullData)
        }).catch(error => {
            console.log(error.message)
        })
    }
    addToFav =async (item) => {
        const reqbody = {
            title: item.title,
            credit_line: item.credit_line,
            artist_title: item.artist_title,
            thumbnail: item.thumbnail
        }
        await axios.post(`http://localhost:8000/art/favorite`, reqbody)
    }

    render() {
        return (
            <div>
                {
                    this.state.fullData.map((item) => {
                        return <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.credit_line}</Card.Text>
                                <Card.Text>{item.artist_title}</Card.Text>
                                <Button onClick={() => this.addToFav(item)} variant="primary">Add to Fav</Button>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        )
    }
}

export default Home
