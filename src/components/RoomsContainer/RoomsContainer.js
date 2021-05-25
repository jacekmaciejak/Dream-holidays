import React from 'react'
import './RoomsContainer.css'
import RoomsFilter from './RoomsFilter/RoomsFilter'
import RoomsList from './RoomsList/RoomsList'
import { RoomConsumer } from '../../context'
import Loading from '../Loading/Loading'

function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }
                    return (
                        <div>
                            <h1>hello from rooms container</h1>
                            <RoomsFilter rooms={rooms}></RoomsFilter>
                            <RoomsList romms={sortedRooms}></RoomsList>
                        </div>
                    )
                }
            }
        </RoomConsumer>

    )
}

export default RoomsContainer
