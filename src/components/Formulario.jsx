import { useState } from "react";

// Componentes bootstrap
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
// Custom hooks
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  // State para manejar los datos del formulario
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  // State para manejar la alerta
  const [alerta, setAlerta] = useState("");

  // Accediendo a los valores del contexto de categorias por medio del custom hook useCategorias
  const { categorias } = useCategorias();

  // Accediendo a los valores del contexto de bebidas por medio del custom hook useBebidas
  const { consultarBebidas, bebidas } = useBebidas();

  // Funcion que valida y consulta la data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando que los campos esten completos
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }

    setAlerta();

    // Consultando las bebidas
    consultarBebidas(busqueda);
  };

  return (
    <Form
      // Funcion que se ejecuta cuando el usuario envia el formulario
      onSubmit={handleSubmit}
    >
      {
        // Alerta
        alerta && (
          <Alert variant="danger" className="text-center">
            {alerta}
          </Alert>
        )
      }

      <Row>
        <Col md={6}>
          {/* Agrupando Label e Input */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Categoria Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              // El value es el valor que tenga nombre en el state de busqueda
              value={busqueda.nombre}
              // Actualizando el state de busqueda cada que el usuario digita algo
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {/* Agrupando Label e Select */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Nombre Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              // El value es el valor que tenga categoria en el state de busqueda
              value={busqueda.categoria}
              // Actualizando el state de busqueda cada que el usuario cambia de select
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Selecciona Categoria -</option>
              {
                // Iterando sobre las caterogias
                categorias.map((categoria) => (
                  <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
