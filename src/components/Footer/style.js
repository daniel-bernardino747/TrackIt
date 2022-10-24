import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    width: 23.4375em;
    height: 4.375em;
    border: 0.0625em solid ${COLOR.bgGray};
    background: ${COLOR.bgWhite};

    div {
        position: relative;
    }
`;

const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9.375em;
    height: 100%;
    border-radius: 2.5em;
    color: ${COLOR.bgButton};
    font-size: 1.125em;
    cursor: pointer;
    
    &:hover {
        color: ${COLOR.hoverButton};
    }
`;

const MainOption = styled.div`
    display: flex;
    position: absolute;
    bottom: 2.1875em;
    justify-content: center;
    align-items: center;
    width: 5.625em;
    height: 5.625em;
    padding: 0.3125em;
    border-radius: 5.625em;
    color: ${COLOR.bgWhite};
    cursor: pointer;
    background: ${COLOR.bgButton};
    
    &:hover {
        background: ${COLOR.hoverButton};
    }
`;

export { Container, Option, MainOption };