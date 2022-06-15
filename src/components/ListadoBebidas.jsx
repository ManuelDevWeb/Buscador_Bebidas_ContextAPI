// Componentes bootstrap
import { Row, Spinner } from "react-bootstrap";
// Custom hook
import useBebidas from "../hooks/useBebidas";
// Componentes
import Bebida from "./Bebida";

const ListadoBebidas = () => {
  // Accediendo a los valores del contexto de bebidas por medio del custom hook useBebidas
  const { bebidas, cargando } = useBebidas();

  return (
    <Row className="justify-content-center mt-5">
      {
        // Si cargando es true mostramos spinner
        cargando && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
      }

      {
        // Iterando sobre las bebidas
        bebidas.map((bebida) => (
          <Bebida key={bebida.idDrink} bebida={bebida} />
        ))
      }
    </Row>
  );
};

export default ListadoBebidas;
