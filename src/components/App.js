//Импортируем сам React
import React, {PureComponent} from 'react'
//Подгружаем компонент ArticleList
import ArticleList from "./ArticleList";
//Импортируем список статей
import articles from "../fixtures"
//Подключаем Bootrap
import 'bootstrap/dist/css/bootstrap.css'


//Основной класс программы
class App extends PureComponent {
    //Объявляем переменную состояния компонента
    state = {
        reverted: false
    }

    //Метод для отображения компонента
    //articles.slice() - делает копию массива статей, чтобы НЕ передавать ее по ссылке
    //Это важно, когда используется PureComponent, который включает в себя автоматически ShouldComponentUpdated,
    //и если передать по ссылке, то reverse() по факту НЕ изменяет массив, а значит изменений отображаться НЕ будет
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name
                        <button className="btn btn-primary" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles }/>
            </div>
        )
    }

    //Наш метод для изменения состояния
    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }


}


export default App
