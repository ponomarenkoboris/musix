import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import { currentUser } from "./app/userDara";
import './App.scss';
import SearchSong from './components/SearchSong';

function App() {
    const user = useSelector(currentUser);

    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <div className="routes-wrapper">
                        <NavLink className="route-link" to={'/search-song'} exact activeClassName="active-route">Search Song</NavLink>
                    </div>
                    <div className="logo-wrapper">
                        {Object.keys(user).length ?
                            <img src={user.img} className="user-img" alt="Your avatar" />
                            : <h1>LOGO</h1>
                        }
                    </div>
                </header>
                <main className="main-section">
                    <Redirect from={'/'} to={'/search-song'} />
                    <Route path={'/search-song'}>
                        <SearchSong />
                    </Route>
                </main>
            </Router>
        </div>
    );
}

export default App;
