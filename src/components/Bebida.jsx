// Componentes bootstrap
import { Col, Card, Button } from "react-bootstrap";

// Custom hooks
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  // Accediendo a los datods del context bebidas contexto a traves del custom hook useBebidas
  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  return (
    <Col md={6} lg={3}>
      {/* Card de Bebida */}
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant="warning"
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick(), handleBebidaIdClick(bebida.idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
