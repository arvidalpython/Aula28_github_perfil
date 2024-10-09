import { useState, useEffect } from "react"

const Formulario = () => {

    //o "useState" retorna o valor e uma função para alterar esse valor
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(()=>{
        console.log("o componente iniciou")

        return () =>{
            console.log("o componente finalizou")
        }

    }, []);//quando passa o array vazio, serve para verificar quando o componente é renderizado

    //o "useEffect" serve para acompanhar alterações em determinados campos
    useEffect(()=>{
        console.log("o estado nome mudou")
    }, [nome]);


    useEffect(()=>{
        console.log("matéria A mudou para" + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        //setNome(evento.target.value);
        setNome(estadoAnterior =>{
        // console.log(estadoAnterior);
        return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3;

        // console.log(media);
        // console.log(soma);

        if(media >= 7){
            return (
                <p>Olá {nome}, vc foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}, vc não foi aprovado</p>
            )
        }
    }

    return (
        <form>

            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario