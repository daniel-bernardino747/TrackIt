import { LoginContext } from '../contexts/LoginContext';
import styled from 'styled-components';
import { useContext } from 'react';

const Header = () => {
    const { user } = useContext(LoginContext);

    console.log(user)

    return (
        <Container>
            <h1>TrackIt</h1>
            <IconUser src={user.image} alt="perfil-header-icon" />
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    position: fixed;
    z-index: 3;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    padding: 0 17px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    pointer-events: none;

    h1 {
        color: #fff;
        font-size: 39px;
        font-family: 'Playball', cursive;
        pointer-events: none;
    }
`;

const IconUser = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;  
`;

export default Header;