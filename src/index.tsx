import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/store';





export const renderEntireTree= () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}


renderEntireTree()

store.subscribe(renderEntireTree)



