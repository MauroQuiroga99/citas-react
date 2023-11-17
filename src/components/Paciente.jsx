const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿deseas eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div>
      <div className=" bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case"> {nombre} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 font-bold bg-indigo-800 hover:bg-indigo-950 text-white uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            {" "}
            Editar
          </button>

          <button
            type="button"
            className="py-2 px-10 font-bold bg-red-800 hover:bg-red-950 text-white uppercase rounded-lg"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
