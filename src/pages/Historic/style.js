import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
`;
const Message = styled.div`
    padding: 0 20px;
    color: #666;
    font-size: 18px;
`;
const TitleHistoric = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 100px 20px 20px 20px;
    color: #126BA5;
    font-size: 23px;
`;

export { Container, Message, TitleHistoric };