import Platillo from "./Platillos";

function ListadoPlatillos({menu, setMen, eliminarPlatillo}) {
 

  
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black uppercase text-3xl md:text-center">{menu.length != 0 ? "Listado de Platillos" : "No hay platillos"}</h2>

      {menu.length > 0 ? (
        <>
        <p className="text-2xl mt-4     lg:text-center md:text-center">
          Administra tus {" "}
          <span className="text-yellow-600 text-2xl font-bold">Alimentos y Bebidas</span>
        </p>
      </>
      ) : (
        <>
        <p className="text-2xl mt-4     lg:text-center md:text-center">
          Comienza agregando platillos {" "}
          <span className="text-yellow-600 text-2xl font-bold">y aparecerán en este lugar</span>
        </p>
      </>
      )}

      

      {menu.map( (platillo) =>(

        <Platillo
          key={platillo.id}
          platillo={platillo}
          setMen={setMen}
          eliminarPlatillo = {eliminarPlatillo}
        />

      ))}
      
      
     
    </div>
  );
}

export default ListadoPlatillos;
