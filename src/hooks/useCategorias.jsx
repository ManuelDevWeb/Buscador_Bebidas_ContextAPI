import { useContext } from "react";

// Contexto (Permite acceder al contexto)
import CategoriaContext from "../context/CategoriasProvider";

const useCategorias = () => {
  return useContext(CategoriaContext);
};

export default useCategorias;
