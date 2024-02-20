import { useState, useEffect }from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPlatillos from "./components/ListadoPlatillos"

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('menu')) ?? [];
  const [menu, setMenu] = useState(INITIAL); 
  const [men, setMen] = useState({}); 


  useEffect(()=>{
    localStorage.setItem('menu',JSON.stringify(menu))
  },[menu])

  const eliminarPlatillo = (id) => {
    const platillosActualizados = menu.filter(platillo => platillo.id !== id )
 
    setMenu(platillosActualizados);
    
  }


  return (
    <div className="container mx-auto h-screen mt-5">
        <Header/>

        <div className="mt-16 md:flex">
          <Formulario
            menu = {menu}
            setMenu = {setMenu}
            men = {men}
            setMen = {setMen}
          />
          <ListadoPlatillos
            menu={menu}
            setMen = {setMen}
            eliminarPlatillo = {eliminarPlatillo}
          />
        </div>

    </div>   
  )
}

export default App
