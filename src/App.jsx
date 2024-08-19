import styled from "styled-components"
import EstiloGlobal from "./componentes/EstilosGlobai";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradiente>
      <EstiloGlobal />
      <Cabecalho />
      <BarraLateral />
      <Banner />
    </FundoGradiente>
  );
};

export default App;
