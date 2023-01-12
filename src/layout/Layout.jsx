import React, { createContext, useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


export const ThemeContext = createContext(null);

export default function Layout({children}) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((e) => (e === "light" ? "dark" : "light"));
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
    <div className="App" id={theme}>
    <NavBar onChange={toggleTheme} theme={theme} />
        {children}
    <Footer/>
    </div>
    </ThemeContext.Provider>

  )
}
