import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
`;
const CreateHabit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 100px 20px 20px 20px;
    color: #126BA5;
    font-size: 23px;

    button {
        width: 40px;
        height: 30px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        font-weight: 700;
        font-size: 20px;
        background: #52B6FF;

        &:hover {
            background: #3E9ADE;
        }
    }
`;
const BoxHabits = styled.div`
    margin-bottom: 100px;
`;
const AlertHabit = styled.div`
    margin: 0 20px;
    color: #666;
    font-size: 18px;
    line-height: 22px;
`;

export { Container, BoxHabits, AlertHabit, CreateHabit };