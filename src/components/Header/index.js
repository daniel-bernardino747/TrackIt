import { COLOR } from '../../constants/Colors';
import { LoginContext } from '../../contexts/LoginContext';
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
    z-index: 3;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 23.4375em;
    height: 4.375em;
    padding: 0 1.0625em;
    pointer-events: none;
    background: ${COLOR.headerAndTitle};
    box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.15);

    h1 {
        color: ${COLOR.bgWhite};
        font-size: 2.4375em;
        font-family: 'Playball', cursive;
        pointer-events: none;
    }
`;

const IconUser = styled.img`
    width: 3.1875em;
    height: 3.1875em;
    border-radius: 6.15625em;  
`;

export default Header;