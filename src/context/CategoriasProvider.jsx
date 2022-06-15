import { useEffect, useState, createContext } from "react";
import axios from "axios";

// Creando el contexto (Permite acceder al contexto)
const CategoriaContext = createContext();

// Provider (Permite a los hijos tener acceso al state)
const CategoriasProvider = ({ children }) => {
  // State de categorias
  const [categorias, setCategorias] = useState([]);

  // useEffect que se ejecuta una vez se renderiza el componente
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // Funcion para obtener las caterogias de la API
  const obtenerCategorias = async () => {
    //www.thecocktaildb.com/api.php
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

      // Consultando la API
      const { data } = await axios.get(url);
      // Actualizamos el state de categorias
      setCategorias(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoriaContext.Provider value={{ categorias }}>
      {children}
    </CategoriaContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriaContext;
