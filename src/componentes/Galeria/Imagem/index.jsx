import styled from "styled-components";

const Figura = styled.figure`
    background-color: #001634;
    border-radius: 20px;
    display: grid;
    grid-template-areas: 
        "foto foto foto"
        "titulo titulo titulo"
        "descricao like expandor";
    
`;

const Foto = styled.img`
    grid-area: foto;
`;


const Imagem = ({foto}) => {
    return (
        <Figura>
            <Foto src={foto.path} alt={foto.fonte} />
        </Figura>
    );
};

export default Imagem;