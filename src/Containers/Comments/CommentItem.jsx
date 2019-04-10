import React, { Component } from 'react'
import DateFormatter from '../../Helpers/DateFormatter';

class ItemComment extends Component {

    render() {
        const {
            author,
            body,
            timestamp,
            voteScore            
        } = this.props

        return (
            <div>
                <p>{ author }</p>
                <p>{ body }</p>
                <p>{ DateFormatter(timestamp) }</p>
                <p>{ voteScore }</p>
            </div>
        )
    }
}

export default ItemComment