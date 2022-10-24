import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23.4375em;
    min-height: 100vh;
    background: ${COLOR.bgGray};
`;
const Message = styled.div`
    padding: 0 1.25em;
    color: ${COLOR.text};
    font-size: 1.125em;
`;
const TitleHistoric = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6.25em 1.25em 1.25em 1.25em;
    color: ${COLOR.headerAndTitle};

`;

export { Container, Message, TitleHistoric };