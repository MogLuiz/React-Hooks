import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'


const UseContext = (props) => {

    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state, // Preservando todos os meus outros atributos e setando apenas o number.
            number: state.number + delta   // Respeitando o principio da imutabilidade.
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{state.number}</span>
                <span className="text">{state.text}</span>
            </div>

            <div>

                <button
                    className="btn"
                    onClick={() => addNumber(-1)}
                >
                    -1
                </button>

                <button
                    className="btn"
                    onClick={() => addNumber(+1)}
                >
                    +1
                </button>

            </div>

        </div>
    )
}

export default UseContext
