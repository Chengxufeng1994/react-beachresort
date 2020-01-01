import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title"
// prop-types 型別檢查
import PropTypes from 'prop-types'

class FeaturedRoom extends Component {
    // STEP 3: 方法一 定義 contextType
    static contextType = RoomContext;

    render() {
        // 才可以使用 this.context
        let { featuredRooms, loading } = this.context;
        // console.log(featuredRooms)

        featuredRooms = featuredRooms.map((room) => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className="featured-rooms">
                <Title title="featured room" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : featuredRooms}
                </div>
            </section>
        )
    }
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default FeaturedRoom;