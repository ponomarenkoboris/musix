import React, {useRef} from "react";
import { useThemeContext } from "../context/ThemeContext";
import './styles/ThemeSwitcher.scss'

const DAY_MODE = '#ffffff'
const NIGHT_MODE = '#0b2959'

export function ThemeSwitcher() {
    const switcher = useRef(null)
    const {theme, setTheme} = useThemeContext()

    function switchTheme() {
        switcher.current.classList.toggle('switch-on')
        setTheme(prev => prev === DAY_MODE ? NIGHT_MODE : DAY_MODE)
    }

    return (
        <div className="theme-switcher-container">
            <p className="day-mode" style={{ opacity: theme === DAY_MODE ? 1 : 0 }}>Day mode</p>
            <div ref={switcher} className="switcher switch-on" onClick={switchTheme}></div>
            <p className="night-mode" style={{ opacity: theme === NIGHT_MODE ? 1 : 0 }}>Night mode</p>
        </div>
    )
}