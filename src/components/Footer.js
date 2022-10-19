import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <Option>Hábitos</Option>
            <div>
                <MainOption>Hoje</MainOption>
            </div>
            <Option>Histórico</Option>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    width: 375px;
    height: 70px;
    background: #FFF;

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
    
    &:hover {
        background: #3E9ADE;
    }
`;



export default Footer;