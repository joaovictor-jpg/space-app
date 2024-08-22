import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { IoMdClose } from "react-icons/io";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DailogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`;

const ButtonEstilizado = styled.button`
    position: relative;
    top: -320px;
    left: 415px;
    background-color: transparent;
    border: none;

`;

const ModalZoom = ({ foto }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DailogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <ButtonEstilizado><IoMdClose color="red" size={35} /></ButtonEstilizado>
                    </form>
                </DailogEstilizado>
            </>}
        </>
    );
};

export default ModalZoom;