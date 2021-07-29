import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState) // Preciso passar a função que vai evoluir o estado e vou passar o estado inicial

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Usuário não logado</span>
                }

                <span className="text">{state.number}</span>
            </div>
            <div className="center">
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'Laryssa' })}
                >
                    Logar
                </button>

                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'number_add2' })}
                >
                    +2
                </button>
            </div>
        </div>
    )
}

export default UseReducer
