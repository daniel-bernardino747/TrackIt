import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    width: 375px;
    height: 70px;
    background: #FFF;
    border: 1px solid #fafafa;

    div {
        position: relative;
    }
`;

const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    border-radius: 40px;
    color: #52B6FF;
    font-size: 18px;
    cursor: pointer;
    
    &:hover {
        color: #3E9ADE;
    }
`;

const MainOption = styled.div`
    display: flex;
    position: absolute;
    bottom: 35px;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 90px;
    color: #FFF;
    cursor: pointer;
    background: #52B6FF;
    padding: 5px;
    
    &:hover {
        background: #3E9ADE;
    }
`;

export { Container, Option, MainOption };