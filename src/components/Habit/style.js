import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const Container = styled.div`
    position: relative; 
    width: 21.25em;
    min-height: 5.6875em;
    margin-bottom: 0.625em;
    padding-right: 1.875em;
    border-radius: 0.3125em;
    background: ${COLOR.bgWhite};

    h1 {
        padding: 0.8125em 0 0 0.9375em;
        color: ${COLOR.text};
        font-size: 1.25em;
    }
`;
const DaysOfWeek = styled.div`
    display: flex;
    width: 100%;
    padding: 0.5em 1.0625em;
    gap: 0.3125em;
`;
const OneHabit = styled.button`
    width: 1.875em;
    height: 1.875em;
    border: 0.0625em solid ${COLOR.borderInput};
    border-radius: 0.3125em;
    color: ${props => props.handleDay ? COLOR.bgWhite : COLOR.borderInput};
    font-size: 1.25em;
    pointer-events: none;
    background: ${props => props.handleDay ? COLOR.borderInput : COLOR.bgWhite};
    
    &:hover {
        background: ${props => props.handleDay ? COLOR.borderInput : COLOR.bgWhite};
    }
`;
const RemoveHabit = styled.img`
    position: absolute;
    top: 0.75em;
    right: 0.625em;
    width: 0.875em;
    height: 0.9375em;
    cursor: pointer;
    background: ${COLOR.bgWhite};
`;

export { Container, DaysOfWeek, OneHabit, RemoveHabit };