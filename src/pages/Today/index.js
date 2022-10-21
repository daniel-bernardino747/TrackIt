import { useContext, useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { LoginContext } from '../../contexts/LoginContext';
import { ProgressContext } from '../../contexts/ProgressContext';
import checkIcon from '../../assets/images/checkIcon.svg';
import { getHabitsOfDay } from '../../services/GET';
import styled from 'styled-components';
import { toggleDoneHabit } from '../../services/POST';

const Today = () => {
    const { dateToday, habitsToday, setHabitsToday, progressPorcentage, setProgressPorcentage } = useContext(ProgressContext);
    const { user } = useContext(LoginContext);
    const [bla, setBla] = useState(false);

    console.log("habitsToday => ", habitsToday)
    console.log("user => ", user)

    useEffect(() => {
        console.log('uma vez', user.config)
        getHabitsOfDay(user.config)
            .then(ans => {
                setHabitsToday(ans.data);
            })
            .catch(err => console.log(err))
    }, [bla])


    useEffect(() => {
        setProgressPorcentage((habitsToday.filter(e => e.done === true).length / habitsToday.length) * 100)
    }, [habitsToday])

    const toggleHabit = (habit) => {
        if (habit.done) {
            console.log("checked")
            toggleDoneHabit(`${habit.id}/uncheck`, habit, user.config)
                .then(ans => {
                    console.log("ans =>", ans)
                    setBla(!bla);
                })
                .catch(err => console.log(err))
        } else {
            console.log('unchecked')
            toggleDoneHabit(`${habit.id}/check`, habit, user.config)
                .then(ans => {
                    console.log("ans =>", ans)
                    setBla(!bla);
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <Container>
            <Header />
            <ProgressDay>
                <h1>{dateToday.dayWeek}, {dateToday.date}</h1>
                {habitsToday.length !== 0 ? (
                    <Subtitle green>{Math.round(progressPorcentage)}% dos hábitos concluídos</Subtitle>
                ) : (
                    <Subtitle>Nenhum hábito concluído ainda</Subtitle>
                )}
            </ProgressDay>

            {habitsToday && (
                <HabitsToDo>
                    {habitsToday.map((h, i) =>
                        <HabitToDo key={h.id}>
                            <div>
                                <h1>{h.name}</h1>
                                <p>
                                    Sequencia atual: <Span green={h.done}> {h.currentSequence} dias</Span>
                                </p>
                                <p>Seu recorde: <Span green={(h.currentSequence === h.highestSequence && h.highestSequence !== 0)}>{h.highestSequence} dias</Span></p>
                            </div>
                            <CheckHabit done={h.done} onClick={() => toggleHabit(h)}>
                                <img src={checkIcon} />
                            </CheckHabit>
                        </HabitToDo>
                    )}
                </HabitsToDo>
            )}

            <Footer />
        </Container>
    );
};

const Container = styled.section`
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProgressDay = styled.div`
    padding: 100px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    
    h1 {
        font-size: 23px;
        color: #126BA5;
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
    width: 340px;
    min-height: 94px;
    border-radius: 5px;
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        padding: 15px;
    }

    h1 {
        font-size: 20px;
        color: #666;
        margin-bottom: 8px;
    }

    p {
        font-size: 13px;
        color: #666;
        margin-bottom: 4px;
    }
`;

const Span = styled.span`
    color: ${props => props.green ? "#8FC549" : "#666"};
`;

const CheckHabit = styled.div`
    width: 69px;
    height: 69px;
    margin: 13px;
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

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

export default Today;