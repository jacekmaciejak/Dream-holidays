import React from 'react'
import Article from '../components/Article/Article'
import './Blog.css'
function Blog() {
    return (
        <section className='blog__container'>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </section>
    )
}

export default Blog
