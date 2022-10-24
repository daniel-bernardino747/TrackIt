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
const ProgressDay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6.25em 1.25em 1.25em 1.25em;
    gap: 0.3125em;

    h1 {
        color: ${COLOR.headerAndTitle};
        font-size: 1.4375em;
    }
`;
const Subtitle = styled.p`
    color: ${props => props.green ? COLOR.bgGreen : COLOR.bgSubtitle}; 
    font-size: 1.125em;
`;
const HabitsToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625em;
`;
const HabitToDo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 21.25em;
    min-height: 5.875em;
    border-radius: 0.3125em;
    background: ${COLOR.bgWhite};

    div {
        padding: 0.9375em;
    }
    h1 {
        margin-bottom: 0.5em;
        color: ${COLOR.text};
        font-size: 1.25em;
    }
    p {
        margin-bottom: 0.25em;
        color: ${COLOR.text};
        font-size: 0.8125em;
    }
`;
const Span = styled.span`
    color: ${props => props.green ? COLOR.bgGreen : COLOR.text};
`;
const CheckHabit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.3125em;
    height: 4.3125em;
    margin: 0.8125em;
    border-radius: 0.3125em;
    background: ${props => props.done ? COLOR.bgGreen : COLOR.bgUnchecked};

    &:hover {
        opacity: 0.8;
    }
    &:active {
        background: green;
    }

    img {
        width: 2.1875em;
    }
`;

export { Container, ProgressDay, Subtitle, HabitsToDo, HabitToDo, Span, CheckHabit };