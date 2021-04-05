import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import './App.scss';
import MyNote from "./components/mynote/MyNote";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <div className="routes-wrapper">
                        <NavLink className="route-link" to={'/'} exact activeClassName="active-route">.film-note</NavLink>
                        <NavLink className="route-link" to={'/my-note'} exact activeClassName="active-route">Мои заметки</NavLink>
                        <NavLink className="route-link" to={'/profile'} exact activeClassName="active-route">Профиль</NavLink>
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
                        <Route path={'/profile'}>
                            <Profile />
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
