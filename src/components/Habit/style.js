import styled from 'styled-components';

const Container = styled.div`
    position: relative; 
    width: 340px;
    min-height: 91px;
    margin-bottom: 10px;
    padding-right: 30px;
    border-radius: 5px;
    background: #FFF;

    h1 {
        padding: 13px 0 0 15px;
        color: #666;
        font-size: 20px;
    }
`;
const DaysOfWeek = styled.div`
    display: flex;
    width: 100%;
    padding: 8px 17px;
    gap: 5px;
`;
const OneHabit = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.handleDay ? "#FFF" : "#D5D5D5"};
    font-size: 20px;
    pointer-events: none;
    background: ${props => props.handleDay ? "#D5D5D5" : "#FFF"};
    
    &:hover {
        background: ${props => props.handleDay ? "#D5D5D5" : "#FFF"};
    }
`;
const RemoveHabit = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
    width: 14px;
    height: 15px;
    cursor: pointer;
    background: #FFF;
`;

export { Container, DaysOfWeek, OneHabit, RemoveHabit }