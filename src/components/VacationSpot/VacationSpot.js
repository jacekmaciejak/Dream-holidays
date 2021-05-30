import React, { Component } from "react";
import { RoomContext } from "../../context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";
import './VacationSpot.css'

export default class VacationSpot extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, vacationSpot: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
        return (
            <section className="featured-rooms">
                <Title title="miejsce" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}
