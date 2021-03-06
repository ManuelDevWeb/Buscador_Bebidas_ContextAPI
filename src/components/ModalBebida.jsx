// Componentes bootstrap
import { Modal, Image } from "react-bootstrap";
// Custom hooks
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  // Accediendo a los datos del contexto bebidas contexto a partir del custom hook useBebidas
  const { modal, handleModalClick, receta, cargandoModal } = useBebidas();

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i <= 15; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={`Ingredient ${i}`}>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    !cargandoModal && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={receta.strDrinkThumb}
          alt={`Imagen receta ${receta.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalBebida;
