import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
`;
const ProgressDay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 100px 20px 20px 20px;
    gap: 5px;

    h1 {
        color: #126BA5;
        font-size: 23px;
    }
`;
const Subtitle = styled.p`
    color: ${props => props.green ? "#8FC549" : "#BABABA"}; 
    font-size: 18px;
`;
const HabitsToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const HabitToDo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    min-height: 94px;
    border-radius: 5px;
    background: #FFF;

    div {
        padding: 15px;
    }
    h1 {
        margin-bottom: 8px;
        color: #666;
        font-size: 20px;
    }
    p {
        margin-bottom: 4px;
        color: #666;
        font-size: 13px;
    }
`;
const Span = styled.span`
    color: ${props => props.green ? "#8FC549" : "#666"};
`;
const CheckHabit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    margin: 13px;
    border-radius: 5px;
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};

    &:hover {
        opacity: 0.8;
    }
    &:active {
        background: green;
    }

    img {
        width: 35px;
    }
`;

export { Container, ProgressDay, Subtitle, HabitsToDo, HabitToDo, Span, CheckHabit };