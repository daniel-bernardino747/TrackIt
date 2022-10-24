import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23.4375em;
    min-height: 100vh;
    background: ${COLOR.bgGray};
`;
const CreateHabit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6.25em 1.25em 1.25em 1.25em;
    color: ${COLOR.headerAndTitle};
    
    h1 {
        font-size: 1.4375em;
    }

    button {
        width: 2.5em;
        height: 1.875em;
        border: none;
        border-radius: 0.3125em;
        color: ${COLOR.bgWhite};
        font-weight: 700;
        font-size: 1.25em;
        background: ${COLOR.bgButton};

        &:hover {
            background: ${COLOR.hoverButton};
        }
    }
`;
const BoxHabits = styled.div`
    margin-bottom: 6.25em;
`;
const AlertHabit = styled.div`
    margin: 0 1.25em;
    color: ${COLOR.text};
    font-size: 1.125em;
    line-height: 1.375em;
`;

export { Container, BoxHabits, AlertHabit, CreateHabit };