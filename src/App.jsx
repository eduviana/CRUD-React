import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import EditarCliente from "./paginas/EditarCliente";
import Inicio from "./paginas/Inicio";
import NuevoCLiente from "./paginas/NuevoCLiente";
import VerCliente from "./components/VerCliente";


function App() {
  return (
    //El BrowserRouter tiene que contener todas las rutas
    //EL Routes tambien tiene que contener todas las rutas
    //Con la etiqueta Route de apertura y cierre creo un grupo de rutas
    //Con la etiqueta Route sin cierre creo subrutas dentro de la ruta de su padre
    //Una de las rutas hijas tiene que tener el atributo index
    //En el element={} del padre de cada grupo de rutas tengo que poner el <Outlet /> a donde quiero que se renderizen las subrutas. En el Outlet se muestra el contenido de las ruttas hijas

    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCLiente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
