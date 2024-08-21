import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluido = styled.section`
  flex-grow: 1;
`;

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluido>
          <Titulo>Navegando pela galeria</Titulo>
          {fotos.map(foto => <Imagem key={foto.tagId} foto={foto} /> )}
        </SecaoFluido>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
