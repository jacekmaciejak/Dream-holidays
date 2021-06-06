import React from 'react'
import './Article.css'
import articleImage from '../../images/madagaskar_1.jpg'

function Article() {
    return (
        <article className='acrticle__container'>
            <figure className="article__image">
                <img src={articleImage} alt="title" />
            </figure>
            <div className="articel__info">
                <h2>tytul artykółu</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum minima laborum ipsam atque. Quas voluptas nisi quos officiis, sequi ratione?</p>
            </div>
        </article>
    )
}

export default Article

