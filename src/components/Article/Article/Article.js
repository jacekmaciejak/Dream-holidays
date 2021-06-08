import React from 'react'
import './Article.css'
import articleImage from '../../../images/madagaskar_1.jpg'
import { Link } from "react-router-dom";


function Article({ article }) {
    const { title, description, extras, slug } = article;
    return (
        <article className='acrticle__container' >
            <figure className="article__image">
                <img src={articleImage} alt="title" />
            </figure>
            <div className="article__info">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={`/blog/${slug}`} className="article__button">
                    Więcej
        </Link>
            </div>

        </article>
    )
}

export default Article

