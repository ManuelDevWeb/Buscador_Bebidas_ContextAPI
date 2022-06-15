import { useContext } from "react";

// Contexto (Permite acceder al contexto)
import BebidaContext from "../context/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidaContext);
};

export default useBebidas;
