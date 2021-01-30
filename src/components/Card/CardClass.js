import React, { Component } from 'react'

class CardClass extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.datetime}</h1>
                <h1>{this.props.data.timezone}</h1>
            </div>
        )
    }
}
export default CardClass;