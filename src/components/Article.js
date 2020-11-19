//Импортируем сам React
import React, {PureComponent} from 'react'

class Article extends PureComponent {

    //Конструктор
    constructor(props) {
        super(props)

        //Состояние компонента
        this.state = {
            isOpen: props.defaultOpen,  //Определяем переменную открытия или закрытия новости,
                //по умолчанию передаем через props состояние компонента
            //Последнее состояние открытой статьи
            lastOpenState: null,
            //Количество раз щелкнуто по заголовку
            count: 0
        }

    }

    //Для того, чтобы при нажатии кнопки Revert индекс открытой новости всегда сохранялся указанным в конструкторе
    //Без этого дом просто перестроится, а так снова меняем индекс
    //Произвел рефакторинг, потому что componentWillRecieveProps больше не является безопасным
    //Подробнее: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
    static getDerivedStateFromProps(props, state) {
        if (props.defaultOpen !== state.lastOpenState) {
            return {
                isOpen: props.defaultOpen,
                lastOpenState: props.defaultOpen,
            }
        }
        // Return null to indicate no change to state.
        return null;
    }

    //Нужно ли перестраивать компонент? Сравниваем свойства и определяем
    //ИЛИ ПРОСТО ИСПОЛЬЗУЕМ PURECOMPONENT, где реализовано отслеживание проверка всех свойств и React будет обновлять
    //только те состояния, которые ПОМЕНЯЛИСЬ в DOME
//    shouldComponentUpdate(nextProps, nextState, nextContext) {
//        return this.state.isOpen !== nextState.isOpen
//    }

    //Метод жизненного цикла компонента: СОЗДАНИЕ: после монтировки компонента
    componenentDidMount() {
        console.log('----', 'mounted')
    }

    //Метод для рендеринга компонента на странице (построение виртуального DOM)
    //Логику здесь писать не надо
    render() {
        const {article} = this.props  // Помещаем переданные свойства в переменную-объект article
        //Ширина
        const style = {width: '50%'}
        //если состояние = true, то показываем текст
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        console.log('------', this.props)
        //Рендерим компонент
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        clicked <button onClick={this.incrementCounter}>{this.state.count}</button>
                        <button className="btn btn-secondary btn-sm float-right" onClick={this.handleClick}>
                            {this.state.isOpen ? 'close': 'open'}
                        </button>

                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }

    //Общаботчик щелчка мыши по заголовку
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    //Обработка нажатия кнопки через синтаксический сахар (это как метод класса)
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}



export default Article
