import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const menus = [
    {
        id: 1,
        texto: 'Início',
        iconeAtivo: '/icones/Home - ativo.png',
        iconeInativo: '/icones/Home - inativo.png',
        ativo: true
    },
    {
        id: 2,
        texto: 'Mais vistas',
        iconeAtivo: '/icones/Mais curtidas - ativo.png',
        iconeInativo: '/icones/Mais curtidas - inativo.png',
        ativo: false
    },
    {
        id: 3,
        texto: 'Mais curtidas',
        iconeAtivo: '/icones/Mais vistas - ativo.png',
        iconeInativo: '/icones/Mais vistas - inativo.png',
        ativo: false
    },
    {
        id: 4,
        texto: 'Novas',
        iconeAtivo: '/icones/Novas - ativo.png',
        iconeInativo: '/icones/Novas - inativo.png',
        ativo: false
    },
    {
        id: 5,
        texto: 'Surpreenda-me',
        iconeAtivo: '/icones/Surpreenda-me - ativo.png',
        iconeInativo: '/icones/Surpreenda-me - inativo.png',
        ativo: false
    },

]

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    {menus.map((menu) => {
                        return (
                            <ItemNavegacao
                                key={menu.id}
                                iconeAtivo={menu.iconeAtivo}
                                iconeInativo={menu.iconeInativo}
                                ativo={menu.ativo}
                            >
                                {menu.texto}
                            </ItemNavegacao>
                        );
                    })}
                </ListaEstilizada>
            </nav>
        </aside>
    );
};

export default BarraLateral;