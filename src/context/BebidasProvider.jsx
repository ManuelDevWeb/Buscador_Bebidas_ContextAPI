import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

// Creando el contexto (Permite acceder al contexto)
const BebidaContext = createContext();

// Provider (Permite a los hijos tener acceso al state)
const BebidasProvider = ({ children }) => {
  // State de bebidas
  const [bebidas, setBebidas] = useState([]);

  // Funcion para obtener las bebidas de la API
  const consultarBebidas = async (datos) => {
    //www.thecocktaildb.com/api.php
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      // Consultando la API
      const { data } = await axios.get(url);
      // Actualizamos el state de bebidas
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BebidaContext.Provider value={{ consultarBebidas, bebidas }}>
      {children}
    </BebidaContext.Provider>
  );
};

export { BebidasProvider };

export default BebidaContext;
