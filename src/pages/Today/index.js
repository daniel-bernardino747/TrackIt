import { CheckHabit, Container, HabitToDo, HabitsToDo, ProgressDay, Span, Subtitle } from './style'
import { useContext, useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { LoginContext } from '../../contexts/LoginContext';
import { ProgressContext } from '../../contexts/ProgressContext';
import checkIcon from '../../assets/images/checkIcon.svg';
import { getHabitsOfDay } from '../../services/GET';
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
                {(!isNaN(progressPorcentage) && progressPorcentage !== 0) ? (
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
                                <p>Seu recorde: <Span green={(h.currentSequence === h.highestSequence && h.done)}>{h.highestSequence} dias</Span></p>
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

export default Today;