// Componentes bootstrap
import { Container } from "react-bootstrap";
// Provider (Permite a los hijos tener acceso al state)
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";

// Componentes
import Formulario from "./components/Formulario";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
