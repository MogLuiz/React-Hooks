import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function parOuImpar(numer){
    if(numer % 2 == 0){
        return true
    } else {
        return false
    }
}

const UseEffect = (props) => {
    const[number, setNumber] = useState(1)
    const[fatorial, setFatorial] = useState(1)

    const[numer, setNumer] = useState()
    const[parImpar, setParImpar] = useState("")

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        setParImpar(parOuImpar(numer))
    }, [numer])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
         <SectionTitle title="Exercício #01"/>
         <div className="center">
            <div>
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial < 1 ? 'Não Existe' : fatorial }</span>
             </div>
             <input className="input" type="number" 
                  value={number} 
                   onChange={ getValue => setNumber(getValue.target.value)}/>

            <span className="text">{number}</span>
         </div>
         <SectionTitle title="Exercício #02"/>
         <div className="center"> 
            <span className="text">Status:</span>
            <span className="text red">{parImpar ? 'Par' : 'impar'}</span>
            <input className="input" type="number" 
                  value={numer} 
                   onChange={ getValue => setNumer(getValue.target.value)}/>
         </div>

        </div>
    )
}

export default UseEffect
