import React, { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  // ?Creamos el estado que nos va a permitir modificar cada uno de los regitros 
  const [paciente, setPaciente] = useState({});

  // console.log(pacientes)

  return (
    <div className="container mx-auto mt-20">

      <Header />
      <div className="mt-12 md:flex">

      <Formulario  
        pacientes={pacientes}  
        setPacientes={setPacientes}
      />

      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
      />

      </div>
    </div>
  )
}

export default App
