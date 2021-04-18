import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom'
import './App.scss';
import SearchSong from './components/SearchSong';
import { UserWrapper } from './components/UserWrapper'
import { ThemeProvider } from './context/ThemeContext'
import { fetchUserData } from "./utils/spotify";

function App() {

    if (window.location.search.length > 0) {
        const urlParams = new URLSearchParams(window.location.search)
        fetchUserData(urlParams.get('code'))
            .then(() => {
                window.history.pushState('', '', 'http://192.168.1.68:777/search-song') // clear param from url
                window.location.reload() // update user data
            })
            .catch(error => console.error(error))
    }

    return (
        <ThemeProvider>
            <div className="App">
                <Router>
                    <header className="App-header">
                        <div className="routes-wrapper">
                            <NavLink className="route-link" to={'/search-song'} exact activeClassName="active-route">Search Song</NavLink>
                        </div>
                        <div className="logo-wrapper">
                            {localStorage.getItem('user_avatar') ? <UserWrapper /> : <h1>LOGO</h1>}
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
        </ThemeProvider>
    );
}

export default App;
