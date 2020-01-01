import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'

class Room extends Component {
    render() {
        const { name, slug, images, price } = this.props.room

        return (
            <article className="room">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="single room" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link
                        className="btn-primary room-link"
                        to={`/rooms/${slug}`}>
                        Features
                    </Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
        )
    }
}

export default Room;