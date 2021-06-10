import React from 'react'
import './Article.css'
import articleImage from '../../../images/madagaskar_1.jpg'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function Article({ article }) {
    const { title, description, extras, address, images } = article;
    return (
        <article className='acrticle__container' >
            <figure className="article__image">
                <img src={images[0] || articleImage} alt="Zdjęcie do artykółu" />
            </figure>
            <div className="article__info">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={`/blog/${address}`} className="article__button">
                    Czytaj
        </Link>
            </div>

        </article>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired
    })
};


export default Article

