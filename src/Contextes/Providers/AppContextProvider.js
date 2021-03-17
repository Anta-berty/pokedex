// iMPORTATION OF MODULES

import React, { useState } from 'react'
import AppContext from '../AppContext'
import localStorageDB from 'localstoragedb'
import { useEffect } from 'react'

const AppContextProvider = ({ children }) => {

    //Creation de la Base de données avec LocalStorage
    const [db, setDb] = useState()


    // Initialisation de la DB . If the database doesn't exist, it is created

    useEffect(() => {
        var pokeDb = new localStorageDB("pokedex", localStorage);

        if (pokeDb.isNew()) {
            pokeDb.createTable("pokemons", ["number", "name", "height", "weight", "description"]);
        }
        setDb(pokeDb)

    }, []);
//PROPAGATION OF VALUE NAME AND NUMBER OF POKEMON
    return (

        <AppContext.Provider value={{ db }}>
            {children}
        </AppContext.Provider>

    )
}

export default AppContextProvider;