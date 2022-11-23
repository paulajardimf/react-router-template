import { useParams } from "react-router-dom";

function ProfilePage() {
  //obj com o name de chave
  const pathParams = useParams();

  return (
    <main>
      <h1>Página acerca do usuário {pathParams.name}</h1>
    </main>
  );
}

export default ProfilePage;
