import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

// Creando el contexto (Permite acceder al contexto)
const BebidaContext = createContext();

// Provider (Permite a los hijos tener acceso al state)
const BebidasProvider = ({ children }) => {
  // State de bebidas
  const [bebidas, setBebidas] = useState([]);
  // State de cargando
  const [cargando, setCargando] = useState(false);
  // State de modal
  const [modal, setModal] = useState(false);
  // State de idBebida
  const [idBebida, setIdBebida] = useState("");
  // State de receta
  const [receta, setReceta] = useState({});

  // useEffect que se ejecuta cada que cambie idBebida
  useEffect(() => {
    const obtenerReceta = async () => {
      // Si no hay un idBebida retornamos y cancelamos la ejecucion de effect
      if (!idBebida) return;

      //www.thecocktaildb.com/api.php
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`;

        // Consultando la API
        const { data } = await axios.get(url);
        // Actualizamos el state de bebida
        setReceta(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReceta();
  }, [idBebida]);

  // Funcion para obtener las bebidas de la API
  const consultarBebidas = async (datos) => {
    //www.thecocktaildb.com/api.php
    try {
      // Actualizamos el state de cargando
      setCargando(true);

      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      // Consultando la API
      const { data } = await axios.get(url);
      // Actualizamos el state de bebidas
      setBebidas(data.drinks);
      // Actualizamos el state de cargando
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para actualizar el valor del modal
  const handleModalClick = () => {
    // Actualizamos state de modal
    setModal(!modal);
  };

  // Funcion para actualizar el valor de idBebida
  const handleBebidaIdClick = (id) => {
    setIdBebida(id);
  };

  return (
    <BebidaContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        cargando,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
      }}
    >
      {children}
    </BebidaContext.Provider>
  );
};

export { BebidasProvider };

export default BebidaContext;
