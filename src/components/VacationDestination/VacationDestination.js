import React, { Component } from "react";
import { RoomContext } from "../../context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";
import './VacationDestination.css'

export default class VacationDestination extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="destination__continer">
        <Title title="najczęściej wybierane kierunki wakacji" />
        <div className="destination__continer-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
