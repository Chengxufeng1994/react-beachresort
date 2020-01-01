import React from 'react';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    /* render something based on the context value */
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(RoomsContainer)
// import React, { Component } from 'react';
// import Loading from './Loading';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context'

// class RoomsContainer extends Component {
//     render() {
//         return (
//             // 方法二: RoomConsumer
//             <RoomConsumer>
//                 {value => {
//                     console.log(value)
//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading) {
//                         return <Loading />
//                     }
//                     /* render something based on the context value */
//                     return (
//                         <div>
//                             <RoomsFilter />
//                             <RoomsList />
//                         </div>
//                     )
//                 }}
//             </RoomConsumer>
//         )
//     }
// }

// export default RoomsContainer