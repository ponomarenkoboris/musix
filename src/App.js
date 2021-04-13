import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom'
import './App.scss';
import SearchSong from './components/SearchSong';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <div className="routes-wrapper">
                        <NavLink className="route-link" to={'/search-song'} exact activeClassName="active-route">Search Song</NavLink>
                    </div>
                    <div className="logo-wrapper">
                        <h1>LOGO</h1>
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
