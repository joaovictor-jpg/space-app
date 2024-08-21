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

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluido>
          <Titulo>Navegando pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map(foto => <Imagem
              key={foto.id}
              foto={foto} />)
            }
          </ImagensContainer>
        </SecaoFluido>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
