import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import './App.scss';
import MyNote from "./components/mynote/MyNote";
import Main from "./components/main/Main";
import Hearthstone from './hearthstone/Hearthstone';

// when IMDB api will be working, it will be a .film-note web-app

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <div className="routes-wrapper">
                        <NavLink className="route-link" to={'/'} exact activeClassName="active-route">.film-note</NavLink>
                        <NavLink className="route-link" to={'/my-note'} exact activeClassName="active-route">Мои заметки</NavLink>
                        <NavLink className="route-link" to={'/hearthstone'} exact activeClassName="active-route">Hearthstone</NavLink>
                    </div>
                    <div className="logo-wrapper">
                        <h1>LOGO</h1>
                    </div>
                </header>
                <main className="main-section">
                    <Switch>
                        <Route path={'/my-note'}>
                            <MyNote />
                        </Route>
                        <Route path={'/hearthstone'}>
                            <Hearthstone name={'7850476804356708cm'} />
                        </Route>
                        <Route path={'/'}>
                            <Main />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
