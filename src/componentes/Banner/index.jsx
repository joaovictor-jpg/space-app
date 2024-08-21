import styled from "styled-components";

/*const DivEstilizada = styled.div`
    background-image: url('/imagens/banner.png');
    background-repeat: no-repeat;
    background-position: center center;
    width: 1156px;
    height: 328px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
        font-size: 40px;
        line-height: 48px;
        font-weight: 400;
        color: #FFFFFF;
        width: 300px;
        padding-left: 2rem;
    }
`;*/

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImagem})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 441px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    width: 1177px;
`;

const TituloEstilizado = styled.h1`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`;

const Banner = ({texto, imgBackground}) => {
    return(
        <FigureEstilizada $backgroundImagem={imgBackground}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    );
};

export default Banner;