import React from 'react'
import Article from "../Article";
import './style.css'

export default function Index({articles}) {
    const articleElemens = articles.map((article, index) =>
        <li key={article.id} className="article-list__li">
            <Article article={article} defaultOpen={index === 1}/>
        </li>
    )
    return (
        <ul>
            {articleElemens}
        </ul>
    )

}