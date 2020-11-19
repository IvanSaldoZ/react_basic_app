//Импортируем сам React
import React from 'react'
//Импортируем метод render из библиотеки react-dom
import {render} from 'react-dom'



function Article() {
    const body = <section>body</section>
    return (
        <div>
            <h2>title</h2>
            {body}
            <h3>creation date: {(new Date()).toDateString()}</h3>
        </div>
    )
}


function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article/>
        </div>
    )
}


render(<App/>, document.getElementById('root'))
