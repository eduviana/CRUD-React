import Formulario from "../components/Formulario";

const NuevoCLiente = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-black text-4xl text-blue-900 mb-3">Nuevo Cliente</h1>
        <p>LLena los siguientes campos para registrar un cliente</p>
      </div>

      <Formulario />
    </>
  );
};

export default NuevoCLiente;
