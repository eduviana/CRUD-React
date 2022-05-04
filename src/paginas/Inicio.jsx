import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerCLientesApi = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCLientesApi();
  }, []);

  const handleDelete = async (id) => {
    const confirmar = confirm("¿Estás seguro de eliminar este cliente?");

    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });

        await respuesta.json();

        const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
        setClientes(arrayClientes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
        <p>Administra tus clientes</p>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-blue-800 text-white text-base">
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="py-3">
                Contacto
              </th>
              <th scope="col" className="py-3">
                Empresa
              </th>
              <th scope="col" className="py-3">
                Acciones
              </th>
              
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
                setClientes={setClientes}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* <table className="w-full mt-5 table-auto shadow border-collapse border border-slate-400 ...">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3">Contacto</th>
            <th className="p-3">Empresa</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
            { clientes.map( cliente => (
                <Cliente 
                  key={cliente.id}
                  cliente={cliente}
                  setClientes={setClientes}
                  handleDelete={handleDelete}
                />
            ))}
          </tbody>
      </table> */}
    </>
  );
};

export default Inicio;
