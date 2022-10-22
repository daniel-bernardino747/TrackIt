import styled from 'styled-components';

const CreateOneHabit = styled.div`
    display: flex;
    z-index: 2;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 180px;
    margin-bottom: 30px;
    border-radius: 5px;
    background: #FFF;
`;

const Input = styled.input.attrs({ type: "text" })`
    width: 305px;
    height: 45px;
    margin-top: 18px;
    padding-left: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;

    &::placeholder {
        color: #D5D5D5;
    }
`;

const DaysOfWeek = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    padding: 8px 17px;
`;

const Day = styled.button`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    background: ${props => props.handleDay ? "#D5D5D5" : "#FFF"};
    color: ${props => props.handleDay ? "#FFF" : "#D5D5D5"};
    font-size: 20px;

    pointer-events: ${props => props.disabled ? "none" : "default"};

    &:hover {
        background: #F0F0F0;
    }
`;

const ButtonsBox = styled.div`
    position: absolute;
    right: 17px;
    bottom: 15px;
    display: flex;
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    color: #FFF;
    border-radius: 5px;
    border: none;
    font-size: 16px;

    &:hover {
        background: #3E9ADE;
    }
`;

const CancelButton = styled(SaveButton)`
    background: #FFF;
    color: #52B6FF;
    margin-right: 10px;

    &:hover {
        color: #3E9ADE;
        background: #FFF;
    }
`;

const Overlay = styled.div`
    z-index: 1;
    background: rgb(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export { CreateOneHabit, Input, DaysOfWeek, Day, ButtonsBox, SaveButton, CancelButton, Overlay };