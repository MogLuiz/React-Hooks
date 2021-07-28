import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'


const UseContext = (props) => {

    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state, // Preservando todos os meus outros atributos e setando apenas o number.
            number: state.number + delta   // Respeitando o principio da imutabilidade.
        })
    }

    const { number, setNumber, text, setText } = useContext(AppContext)


    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
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

            <SectionTitle title="Exercício #02" />

            <div className="center">

                <span className="text">{text}</span>
                <span className="text">{number}</span>

                <button
                    className="btn"
                    onClick={() => setNumber(number - 1)}
                >
                    -1
                </button>

                <button
                    className="btn"
                    onClick={() => setNumber(number + 1)}
                >
                    +1
                </button>

            </div>

        </div>
    )
}

export default UseContext
