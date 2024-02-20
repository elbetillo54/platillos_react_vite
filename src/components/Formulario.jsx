import { useState, useEffect }from "react";
import Error from "./Error";


const Formulario = ({menu, setMenu, men, setMen}) => {
  

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [ingredientes, setIngredientes] = useState("");

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(men).length > 0){
        setNombre(men.nombre)
        setPrecio(men.precio)
        //setImagen(men.imagen)
        setIngredientes(men.ingredientes)
      }
  }, [men])
  
  
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }
 
  
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [nombre, precio, ingredientes].includes("") ){
      setError(true)
      return;
    }
    setError(false);

    //Objeto Platillo
    const objetoPlatillo = {
      nombre, 
      precio, 
      imagen, 
      ingredientes,
      
    }
    
    if(men.id){
      //Editando el registro
      objetoPlatillo.id = men.id
      
      
      const menuActualizados = menu.map(menState => menState.id === men.id ? objetoPlatillo : menState)

      setMenu(menuActualizados)
      setMen({})
    }else{
      //Nuevo Registro
      objetoPlatillo.id = generarId()
      setMenu([...menu, objetoPlatillo])
    }

    

    //Reiniciamos el formulario
    setNombre("")
    setPrecio("")
    setImagen("")
    setIngredientes("")

  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="text-3xl font-black md:text-center uppercase">Formulario</h2>
      <p className="text-2xl mt-4 lg:text-center md:text-center">
        Añade Alimentos y {""}
        <span className="text-yellow-600 text-2xl font-bold">Administralos</span>
      </p>

      <form 
        className="m-10 bg-white shadow-md rounded-md py-10 px-5 w-full"
        onSubmit={handleSubmit}
        >
        <div>
          {error && <Error mensaje="Todos los campos son obligatorios"/>}
          <label htmlFor="nombre" className="font-bold block text-gray-700 uppercase text-xl" >Nombre Platillo 
          </label>
          <input
            id="nombre"
            className="mt-3 w-full py-3 border-2 p-3 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Alimento"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label htmlFor="precio" className="font-bold block text-gray-700 uppercase text-xl" >Precio Platillo
          </label>
          <input
            id="precio"
            className="mt-3 w-full py-3 border-2 p-3 placeholder-gray-400 rounded-md"
            type="number"
            placeholder="Precio del Platillo"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label htmlFor="imagenplatillo" className="font-bold block text-gray-700 uppercase text-xl">
            Imagen del Platillo
          </label>
          <input
          id="imagenplatillo" 
            type="file"
            className="mt-3 w-full file:bg-yellow-600 text-gray-400 text-lg border-2 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:hover:bg-gray-700 file:text-white rounded-md placeholder:text-gray-400" 
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

        </div>

        <div className="mt-8">
          <label htmlFor="ingrediente" className="font-bold block text-gray-700 uppercase text-xl" >Ingredientes
          </label>
          <textarea
            rows={5}
            className="mt-3 w-full py-3 border-2 p-3 placeholder-gray-400 rounded-md resize-none"
            id="ingrediente"
            placeholder="Escribe los ingredientes del platillo"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />

          <input
            type="submit"
            className="bg-yellow-600 py-5 px-5 rounded-md w-full mt-6 font-bold text-white text-2xl uppercase hover:bg-yellow-700 cursor-pointer transition-all"
            value={men.id ? "Editar Paciente" : "Agregar Paciente"}
          />

        </div>
      </form>
    </div>

    
    
  )
}

export default Formulario
