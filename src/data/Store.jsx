import React from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

const AppContext = React.createContext(initialState)

const Store = props => {

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store