import styled from 'styled-components';
import tags from './tags.json'

const Button = styled.button`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    line-height: 1.75rem;
    text-align: center;
    max-width: 7.5rem;
    height: 3rem;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const DivEstilizada = styled.div`
    display: flex;
    align-items: center;
    column-gap: 17px;
    margin-top: 1rem;
`;

const Paragrafo = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 28.8px;
    margin-right: 20px;
`;

const Tags = () => {
    return (
        <DivEstilizada>
            <Paragrafo>Buscar por tag:</Paragrafo>
            {tags.map(tag => <Button key={tag.id}>{tag.titulo}</Button>)}
        </DivEstilizada>
    );
};

export default Tags;