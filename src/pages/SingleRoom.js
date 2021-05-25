import React, { Component } from "react";
import defaultBcg from "../images/defaultImg.jpg";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  //componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>strony nie znaleziono...</h3>
          <Link to="/" className="btn-primary">
            strona główna
          </Link>
        </div>
      );
    }
    const {
      name,
      // description,
      // capacity,
      // size,
      // price,
      // extras,
      // breakfast,
      // pets,
      images
    } = room;
    return (
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`Wakacje ${name}`}>
          <Link to="/rooms" className="btn-primary">
            strona główna
          </Link>
        </Banner>
      </StyledHero>

    );
  }
}
