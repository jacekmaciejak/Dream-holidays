import React, { Component } from "react";
import defaultBcg from "../images/defaultImg.jpg";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero/StyledHero";
import { GiEarthAsiaOceania } from "react-icons/gi";

export default class SingleArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.match.params.address,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMount() {}

    render() {
        const { getArticle } = this.context;
        const article = getArticle(this.state.address);
        if (!article) {
            return (
                <div className="error">
                    <h3>artykułu nie znaleziono...</h3>
                    <Link to="/blog" className="btn-primary">
                        blog
          </Link>
                </div>
            );
        }
        const {
            title, description, extras, images
        } = article;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={` ${title}`}>
                        <Link to="/blog" className="btn-primary">
blog
          </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => (
                            <img key={index} src={item} alt={title} />
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>szczegóły:</h3>
                            <p>{description}</p>
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
            </>
        );
    }
}
