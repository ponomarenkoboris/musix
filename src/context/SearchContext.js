import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {
    const [searchBy, setSearchBy] = useState('track')

    return(
        <SearchContext.Provider value={{ searchBy, setSearchBy }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext);