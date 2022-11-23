import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToProfilePage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate()
  return (
    <main>
      <h1>Página Inicial</h1>
      <button onClick={() => goToProfilePage(navigate, "paula")}>Ir para perfil</button>
      <button onClick={() => goToLoginPage(navigate)}>Ir página de login</button>
    </main>
  );
}

export default HomePage;
