import React, { Component } from "react";
import './SingleCountry.css';
import defaultBcg from "../images/defaultImg.jpg";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero/StyledHero";
import { GiEarthAsiaOceania } from "react-icons/gi";
import VacationSpot from "../components/VacationSpot/VacationSpot";

export default class SingleCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;

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
        <section className="country">
          <div className="country__images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="country__info__wrapper">
            <article className="country__desc">
              <h3>szczegóły:</h3>
              <p>{description}</p>
            </article>
            <article className="country__info">
              <h3>informacje:</h3>
              <h6>cena za osobę: {price} zł / doba</h6>
              <h6>powierzchnia plaży: {size} m</h6>
              <h6>maksymalna liczba gości: {capacity > 1 ? `${capacity} osób` : `${capacity} osób`}</h6>
              <h6>{pets ? "zapraszamy ze zwierzętami domowymi" : "zwierzęta są zabronione"}</h6>
              <h6>{breakfast && "śniadanie w cenie"}</h6>
            </article>
          </div>
        </section>
        <section className="country__benefits">
          <h6>dodatkowo:</h6>
          <ul className="country__list">
            {extras.map((item, index) => {
              return <li key={index}><span><GiEarthAsiaOceania /></span> {item}</li>
            })}
          </ul>
        </section>
        <section className="trip__info">
          <h3>cena zawiera</h3>
          <ul>
            <li><span><GiEarthAsiaOceania /></span>PRZELOTY MIĘDZYNARODOWE <p>warszawa - {name}, {name} - warszawa</p></li>
            <li><span><GiEarthAsiaOceania /></span>PROM <p>{name} - {name}</p></li>
            <li><span><GiEarthAsiaOceania /></span>TRANSFERY WEWNĘTRZNE <p>Wszystkie transfery wewnętrzne prywatnym samochodem z kierowcą </p></li>
            <li><span><GiEarthAsiaOceania /></span>ZAKWATEROWANIE ZE ŚNIADANIAMI <p>6 nocy w {name}</p></li>
            <li><span><GiEarthAsiaOceania /></span>UBEZPIECZENIE ZDROWOTNE <p>KL 40.000 EUR (obejmuje choroby przewlekłe), NNW 15.000 PLN, bagaż 2.000 PLN</p></li>
            <li><span><GiEarthAsiaOceania /></span>ESCAPE BOX <p>Zawiera Escape Book, czyli nasz samodzielnie pisany przewodnik z dokładnymi wskazówkami dotyczącymi Waszej podróży. Dodatkowo znajdziecie tam bilety i vouchery. </p></li>
            <li><span><GiEarthAsiaOceania /></span>OPIEKA NA MIEJSCU <p>Polski numer alarmowy czynny 24 h/dobę </p></li>
          </ul>
        </section>
        {/* <VacationSpot /> */}
      </>
    );
  }
}
