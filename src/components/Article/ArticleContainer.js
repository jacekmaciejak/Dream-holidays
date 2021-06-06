import React, { Component } from 'react'
import './ArticleContainer.css'
// import articleImage from '../../images/madagaskar_1.jpg'
import { ArticleContext } from '../../context'
import Loading from "../Loading/Loading";
import Article from './Article/Article'

export default class ArticleContainer extends Component {
    static contextType = ArticleContext;
    render() {
        let { loading, articles: rooms } = this.context;
        rooms = rooms.map(article => {
            return <Article key={article.id} article={article} />;
        });

        return (
            <section className="articles__container" >
                <div className="articels__wrapper">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}


