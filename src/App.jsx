import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const nome = "Alexandre"
  const [nomeUsuario, setNomeUsuario] = useState('');
  
  function retornaNome(){
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true;

  return (
    // Todo o conteúdo no React deve estar dentro das tags de encapsulamento (Ex.: <div>, <header>), qualquer tag q pode ser usado vários elementos dentro.
    //Fragmento seria uma "tag" vazia: <> </>. Que poderá ser usado para encapsular todo o conteúdo, servindo como tag de encapsulamento.

    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 &&(
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>

        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )} */}

      <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )

}

export default App
