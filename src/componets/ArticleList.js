import React from 'react'
import Article from "./Article";

export default function ArticleList({articles}) {
    const articleElemens = articles.map(
        a => <li key={a.id}><Article article={a}/></li>
    )
    return (
        <ul>
            {articleElemens}
        </ul>
    )

}