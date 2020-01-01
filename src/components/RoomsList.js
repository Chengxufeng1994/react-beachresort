import React, { Component } from 'react';
import Room from './Room';

class RoomsList extends Component {
    render() {
        const { rooms } = this.props

        if (rooms.length === 0) {
            return (
                <div className='empty-search'>
                    <h3>
                        unfortunately no rooms matched your search parameters
                    </h3>
                </div>
            )
        }
        return (
            <section className="roomslist">
                <div className='roomslist-center'>
                    {
                        rooms.map(item => {
                            return (
                                <Room key={item.id} room={item}>
                                </Room>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default RoomsList 