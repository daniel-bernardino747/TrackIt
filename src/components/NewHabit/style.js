import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const CreateOneHabit = styled.div`
    display: flex;
    z-index: 2;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 21.25em;
    height: 11.25em;
    margin-bottom: 1.875em;
    border-radius: 0.3125em;
    background: ${COLOR.bgWhite};
`;

const Input = styled.input.attrs({ type: "text" })`
    width: 19.0625em;
    height: 2.8125em;
    margin-top: 1.125em;
    padding-left: 0.625em;
    border: 0.0625em solid ${COLOR.borderInput};
    border-radius: 0.3125em;
    font-size: 1.25em;

    &::placeholder {
        color: ${COLOR.daySelected};
    }
`;

const DaysOfWeek = styled.div`
    display: flex;
    width: 100%;
    padding: 0.5em 1.0625em;
    gap: 0.3125em;
`;

const Day = styled.button`
    width: 1.875em;
    height: 1.875em;
    border: 0.0625em solid ${COLOR.borderInput};
    border-radius: 0.3125em;
    color: ${props => props.handleDay ? COLOR.bgWhite : COLOR.daySelected};
    font-size: 1.25em;
    background: ${props => props.handleDay ? COLOR.daySelected : COLOR.bgWhite};

    pointer-events: ${props => props.disabled ? "none" : "default"};

    &:hover {
        background: ${COLOR.hoverDay};
    }
`;

const ButtonsBox = styled.div`
    display: flex;
    position: absolute;
    right: 1.0625em;
    bottom: 0.9375em;
`;

const SaveButton = styled.button`
    width: 5.25em;
    height: 2.1875em;
    border: none;
    border-radius: 0.3125em;
    color: ${COLOR.bgWhite};
    font-size: 1em;
    background: ${COLOR.bgButton};

    &:hover {
        background: ${COLOR.hoverButton};
    }
`;

const CancelButton = styled(SaveButton)`
    margin-right: 0.625em;
    color: ${COLOR.bgButton};
    background: ${COLOR.bgWhite};

    &:hover {
        color: ${COLOR.hoverButton};
        background: ${COLOR.bgWhite};
    }
`;

const Overlay = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${COLOR.overlay};
`;

export { CreateOneHabit, Input, DaysOfWeek, Day, ButtonsBox, SaveButton, CancelButton, Overlay };