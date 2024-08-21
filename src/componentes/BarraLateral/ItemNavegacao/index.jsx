import styled from "styled-components";

const ItemListaEstilizada = styled.li`
    font-size: 1.2rem;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const ItemNavegacao = ({iconeAtivo, iconeInativo, children, ativo = false}) => {
    return(
        <ItemListaEstilizada $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
            {children}
        </ItemListaEstilizada>
    );
};

export default ItemNavegacao;