import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
export class Footer extends Component {
    render() {
        return (
            <div>
                <Card bg="dark" variant="dark" className="text-center">
                    <Card.Footer className="text-muted"><p>COPYRIGHT</p></Card.Footer>
                </Card>
            </div>
        )
    }
}

export default Footer
