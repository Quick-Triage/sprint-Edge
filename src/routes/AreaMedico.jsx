import React, { useState } from 'react';
import '../styles/AreaMedicoStyled.css'

const AreaMedico = () => {

  // Usando um estado para controlar cada botão "Chamar" individualmente
  const [chamados, setChamados] = useState({
    1: false, // Para o primeiro botão
    2: false, // Para o segundo botão
    3: false, // Para o terceiro botão
    4: false, // Para o quarto botão
    5: false, // Para o quinto botão
    6: false  // Para o sexto botão
  });

  const handleChamarClick = (id) => {
    setChamados(prevState => ({
      ...prevState,
      [id]: true, // Altera o estado do botão específico
    }));
  }

  return (
    <>
      <h2>Lista de espera: </h2>

      <div className="container-fila">
        <form className="grave">
          <h3>Nome: Thiago Almeida</h3>
          <p>Idade: 11</p>
          <p>CPF: 572.424.788-30</p>
          <p>sintomas: Dores de cabeça fortes</p>
          <p>Motivo: Suspeita de tumor</p>
          <p>Gravidade: Grave</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(1)}
          >
            {chamados[1] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form>
        
        <form className="moderada">
          <h3>Nome: Ricardo Neves</h3>
          <p>Idade: 9</p>
          <p>CPF: 512.841.908-33</p>
          <p>sintomas: Dores no peito</p>
          <p>Motivo: N/A </p>
          <p>Gravidade: Moderada</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(2)}
          >
            {chamados[2] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Ana Clara</h3>
          <p>Idade: 10</p>
          <p>CPF: 401.909.575-33</p>
          <p>sintomas: Febre e dor de garganta</p>
          <p>Motivo: Bacteria </p>
          <p>Gravidade: Leve</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(3)}
          >
            {chamados[3] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form> 

        <form className="moderada">
          <h3>Nome: Antonio Nunes</h3>
          <p>Idade: 12</p>
          <p>CPF: 512.841.908-33</p>
          <p>sintomas: Machucado na perna</p>
          <p>Motivo: Cão com suspeita de raiva </p>
          <p>Gravidade: Moderada</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(4)}
          >
            {chamados[4] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Lorenzo</h3>
          <p>Idade: 13</p>
          <p>CPF: 542.334.708-50</p>
          <p>sintomas: Dores nas costas</p>
          <p>Motivo: Queda </p>
          <p>Gravidade: Leve</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(5)}
          >
            {chamados[5] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Valentina Chavier</h3>
          <p>Idade: 10</p>
          <p>CPF: 545.278.408-80</p>
          <p>sintomas: Febre forte</p>
          <p>Motivo: N/A </p>
          <p>Gravidade: Leve</p>
          <hr />
          <button 
            type='button' 
            className='chamar' 
            onClick={() => handleChamarClick(6)}
          >
            {chamados[6] ? 'Chamado' : 'Chamar'}
          </button> 
          <button>Concluido</button>
        </form>

      </div>

    </>
  )
}

export default AreaMedico;
