import React, { useState } from 'react'
import UserContext from './UserContext.js'


function UserContextProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const [userAuth, setUserAuth] = useState(localStorage.getItem("user") ? true : false)

    return (
        <UserContext.Provider value={{ user, setUser, userAuth, setUserAuth }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider