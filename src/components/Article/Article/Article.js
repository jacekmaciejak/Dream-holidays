import React from 'react'
import './Article.css'
import articleImage from '../../../images/madagaskar_1.jpg'


function Article({ article }) {
    const { title, description, extras } = article;
    return (
        <article className='acrticle__container' >
            <figure className="article__image">
                <img src={articleImage} alt="title" />
            </figure>
            <div className="articel__info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Article

