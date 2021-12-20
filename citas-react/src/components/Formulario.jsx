import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({setPacientes, pacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  // Estado para el error del formulario
  const [error, setError] = useState(false)


  // Funcion para generar un ID
  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if([ nombre, propietario, email, alta, sintomas ].includes('')){
      setError(true)
      return;
    }

    setError(false);

    // Crear Objeto Pacientes para guardarlo en el state del componente APP
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: generarID()
    }

    // !Antes de gurdar nuestro Objeto en el state de APP tenemos que hacer una copia con el Spread Operator, de lo que ya esta en el estado
    setPacientes([...pacientes, objetoPaciente])

    // Reiniciar el Formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimientos de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

          {/* Mostar el error en caso de que sea true || envie como prop {children} al componente de Error de esta forma puedo enviar mas contenido HTML */}
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Masctota</label>

          <input 
            type="text"
            placeholder="Nombre de la Mascota" 
            name="mascota" 
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

          <input 
            type="text"
            placeholder="Nombre del Propietario" 
            name="propietario" 
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

          <input 
            type="email"
            placeholder="Email Contacto Propietario" 
            name="email" 
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

          <input 
            type="date"
            name="alta" 
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={ (e) => setAlta(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>

          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          value="Agregar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        />

      </form>
    </div>
  )
}

export default Formulario;

