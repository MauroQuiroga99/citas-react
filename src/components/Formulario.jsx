import React, { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSumit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);
    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;
      console.log(objetoPaciente);
      console.log(paciente);

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id == paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        {" "}
        Seguimiento pacientes{" "}
      </h2>

      <p className="mt-5 text-lg text-center mb-5">
        Añade pacientes y {""}
        {""}
        <span className=" text-indigo-800 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSumit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="off" // Agrega esta línea para deshabilitar el autocompletado
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            autoComplete="off" // Agrega esta línea para deshabilitar el autocompletado
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" // Agrega esta línea para deshabilitar el autocompletado
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            autoComplete="off" // Agrega esta línea para deshabilitar el autocompletado
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 x-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            autoComplete="off" // Agrega esta línea para deshabilitar el autocompletado
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-800 w-full p-3 text-white uppercase font-bold hover:bg-indigo-950 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
