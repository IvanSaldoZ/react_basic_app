//Компонент для отображения списка статей
//Импортируем сам React
import React, {PureComponent} from 'react'
//Импортируем отображение одной статьи
import Article from "../Article"
//Стили компонента
import './style.css'


export default class ArticleList extends PureComponent {
    //Состояние открытых статей
    state = {
        openArticleId: null
    }

    //Рендерим компонент
    render() {
        //Конвеншн: в props экземпляра класса хранятся свойства, переданные классу компонента
        // (в данном случае - ArticleList)
        //Подготавливаем элементы статей для вывода, применяя к articles map, передавая article и индекс записи
        // Передаем функцию onButtonClick в компонент, чтобы дочерний компонент мог ее использовать для своих нужд
        const articleElements = this.props.articles.map((article) =>
            <li key={article.id} className="article-list__li">
                <Article article = {article} isOpen={this.state.openArticleId === article.id}
                onButtonClick={this.handleClick.bind(this, article.id)}/>
            </li>
        )
        //Рендерим компонент
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    //Метод для обработки нажатия сворачивания статьи с параметром openArticleId
    handleClick = (openArticleId) => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null: openArticleId
    })



}

