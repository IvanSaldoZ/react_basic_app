//Файл-точка входа в наше приложение


//Импортируем сам React
import React from 'react'
//Импортируем метод render из библиотеки react-dom
import {render} from 'react-dom'




//Главный компонент приложения
import App from "./components/App";
render(<App/>, document.getElementById('root'))
