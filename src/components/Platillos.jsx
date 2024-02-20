import x from "../assets/x.jpg"


const Platillos = ({ platillo, setMen, eliminarPlatillo }) => {

  const { id } = platillo

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas Eliminar este Paciente?")

    if(respuesta){
      eliminarPlatillo(id)
    }
    
  }

  return (

    <div className="mt-10 ml-20 bg-white w-full py-10 px-5 rounded-md md:flex shadow-md">

      <div className="lg:w-2/5">
        <img src={x} className="rounded-md py-auto" />
      </div>
      <div>

      </div>
      <div className="lg:w-3/5 ml-4 my-auto">
        <p className="font-bold block text-gray-700 uppercase text-xl mb-6">
          Nombre del Platillo: {" "}
          <span className="font-normal">
            {platillo.nombre}
          </span>
        </p>

        <p className="font-bold block text-gray-700 uppercase text-xl mb-6">
          Precio del Platillo: {" "}
          <span className="font-normal">
            {platillo.precio + " $"}
          </span>
        </p>

        <p className="font-bold block text-gray-700 uppercase text-xl mb-6">
          Ingredientes del Platillo: {" "}
          <span className="font-normal">
            {platillo.ingredientes}
          </span>
        </p>

        <div className="flex flex-row-reverse space-x-4 space-x-reverse">

          <button
            className="bg-red-600 py-3 px-5 hover:bg-red-400 text-white text-xl rounded-md"
            onClick={handleEliminar}
          >Elimiar</button>

          <button
            className="bg-yellow-600 py-3 px-5 hover:bg-yellow-400 text-white text-xl rounded-md"
            onClick={() => setMen(platillo)}
            >
            {"Editar"}
          </button>
        </div>

      </div>


    </div>



  )
}

export default Platillos
