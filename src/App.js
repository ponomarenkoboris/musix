import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom'
import styles from  './App.scss'
import SearchSong from './components/SearchSong'
import Note from './components/Note'
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { UserWrapper } from './components/UserWrapper'
import { ThemeProvider } from './context/ThemeContext'
import { fetchUserData } from "./utils/spotify"

export default function App() {

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
                    <header className={styles.appHeader}>
                        <div className={styles.routesWrapper}>
                            <NavLink className={styles.routeLink} to={'/search-song'} exact activeClassName={styles.activeRoute}>Search Song</NavLink>
                            <NavLink className={styles.routeLink} to={'/notes'} exact activeClassName={styles.activeRoute}>My Notes</NavLink>
                        </div>
                        <ThemeSwitcher />
                        <div className={styles.logoWrapper}>
                            {localStorage.getItem('user_avatar') ? <UserWrapper /> : <h1>LOGO</h1>}
                        </div>
                    </header>
                    <main className={styles.mainSection}>
                        <Redirect from={'/'} to={'/search-song'} />
                        <Route path={'/search-song'}>
                            <SearchSong />
                        </Route>
                        <Route path={'/notes'}>
                            <Note />
                        </Route>
                    </main>
                </Router>
            </div>
        </ThemeProvider>
    )
}