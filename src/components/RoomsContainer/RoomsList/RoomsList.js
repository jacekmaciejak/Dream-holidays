import React from 'react'
import Room from '../../Room/Room'
import './RoomsList.css'

function RoomsList({ rooms }) {

    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h2>brak lokalizacji spełniających wybrane parametry wyszukiwania</h2>
            </div>
        )
    }

    return (
        <section className="rooms-list">
            <div className="rooms-list-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
    )
}

export default RoomsList
