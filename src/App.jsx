// Componentes bootstrap
import { Container } from "react-bootstrap";
// Provider (Permite a los hijos tener acceso al state)
import { CategoriasProvider } from "./context/CategoriasProvider";

// Componentes
import Formulario from "./components/Formulario";

function App() {
  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriasProvider>
  );
}

export default App;
