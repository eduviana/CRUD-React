import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleDelete }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, notas, id } = cliente;

  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th
        scope="row"
        className="px-2 py-4 dark:text-white whitespace-nowrap"
      >
        {nombre}
      </th>
      <td className="px-2 py-4">
        <span>{email}</span> br
        <span>{telefono}</span>
      </td>
      <td className="px-2 py-4">{empresa}</td>
      <td className="px-2 py-4">
        <button
          type="button"
          className="mr-5 text-green-600 font-bold hover:text-green-800 hover:scale-110"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>

        <button
          type="button"
          className="mr-5 text-yellow-500 font-bold hover:text-yellow-700 hover:scale-110"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>

        <button
          type="button"
          className="mr-5 text-red-600 font-bold hover:text-red-800 hover:scale-110"
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
