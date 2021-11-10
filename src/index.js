import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import './styles/styles.css';

const App = () => (
        <>
            <Header/>
        </>
)

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
