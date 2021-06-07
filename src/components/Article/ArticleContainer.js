import React, { Component } from 'react'
import './ArticleContainer.css'
// import articleImage from '../../images/madagaskar_1.jpg'
import { RoomContext } from '../../context'
import Loading from "../Loading/Loading";
import Article from './Article/Article'

export default class ArticleContainer extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredArticles: articles } = this.context;
        articles = articles.map(article => {
            return <Article key={article.id} article={article} />;
        });

        return (
            <section className="article__container" >
                <div className="article__wrapper">
                    {loading ? <Loading /> : articles}
                </div>
            </section>
        );
    }
}


