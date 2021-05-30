import React, { Component } from "react";
import defaultBcg from "../images/defaultImg.jpg";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero/StyledHero";
import { GiEarthAsiaOceania } from "react-icons/gi";
import VacationSpot from "../components/VacationSpot/VacationSpot";

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
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`Wakacje ${name}`}>
            <Link to="/" className="btn-primary">
              strona główna
          </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>szczegóły:</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>informacje:</h3>
              <h6>cena: {price} zł</h6>
              <h6>rozmiar: {size} m</h6>
              <h6>maksymalna liczba gości: {capacity > 1 ? `${capacity} osób` : `${capacity} osób`}</h6>
              <h6>{pets ? "zapraszamy ze zwierzętami domowymi" : "zwierzęta są zabronione"}</h6>
              <h6>{breakfast && "śniadanie w cenie"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>dodatkowo:</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}><span><GiEarthAsiaOceania /></span> {item}</li>
            })}
          </ul>
        </section>
        <VacationSpot />
      </>
    );
  }
}
