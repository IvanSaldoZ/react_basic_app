//Компонент для отображения списка статей
//Импортируем сам React
import React, {PureComponent} from 'react'
//Импортируем отображение одной статьи
import Article from "../Article"
//Стили компонента
import './style.css'


export default class ArticleList extends PureComponent {
    render() {
        //Подготавливаем элементы статей для вывода, применяя к articles map, передавая article и индекс записи
        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li">
                <Article article = {article} defaultOpen = {index === 1}/>
            </li>
        )
        //Рендерим компонент
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }


}

