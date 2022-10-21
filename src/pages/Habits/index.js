import { getHabits, getHabitsOfDay } from "../../services/GET";
import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LoginContext } from "../../contexts/LoginContext";
import { ProgressContext } from "../../contexts/ProgressContext";
import { ThreeDots } from "react-loader-spinner";
import TrashIcon from '../../assets/images/trashIcon.svg';
import { createHabit } from "../../services/POST";
import { deleteHabitRequest } from "../../services/DELETE";
import styled from 'styled-components';

const Habits = () => {
    const { user, disabled, setDisabled } = useContext(LoginContext);
    const { habitsToday, setHabitsToday, progressPorcentage, setProgressPorcentage } = useContext(ProgressContext)
    const [habits, setHabits] = useState(undefined);
    const [newHabit, setNewHabit] = useState(false);
    const [titleHabit, setTitleHabit] = useState("");
    const [daysHabit, setDaysHabit] = useState([]);
    const [days, setDays] = useState([
        { id: 0, day: "D", selected: false },
        { id: 1, day: "S", selected: false },
        { id: 2, day: "T", selected: false },
        { id: 3, day: "Q", selected: false },
        { id: 4, day: "Q", selected: false },
        { id: 5, day: "S", selected: false },
        { id: 6, day: "S", selected: false }]);

    const [bla, setBla] = useState(false)

    console.log('habits => ', habits)

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

    useEffect(() => {
        setDisabled(false)
    }, [])

    useEffect(() => {
        getHabits(user.config)
            .then(ans => {
                setHabits(ans.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [user, bla])

    const markDay = (index) => {

        const newDays = days.map((e) => {
            if (index === e.id) {
                return { ...e, selected: !e.selected }
            } else {
                return e
            }
        })
        const newDaysHabits = newDays.filter(e => e.selected).map(e => e.id)

        setDays(newDays)
        setDaysHabit(newDaysHabits)
    }

    const clearAndClose = () => {
        setTitleHabit("");
        setNewHabit(false);
        const newDays = days.map(e => { return { ...e, selected: false } });
        setDays(newDays);
        setBla(!bla);
        setDisabled(false)
    }

    const saveHabit = () => {
        const body = {
            name: titleHabit,
            days: daysHabit
        }

        setDisabled(true);

        createHabit(body, user.config)
            .then(ans => {
                console.log(ans)
                clearAndClose();
            })
            .catch(err => {
                console.log(err);
                setDisabled(false)
                alert(err.response.data.details)
            });

    }

    const removeHabit = (id) => {
        console.log("removed habit")

        deleteHabitRequest(id, user.config)
            .then(ans => {
                console.log(ans)
                setBla(!bla);
            })
            .catch(err => console.log(err));

    }

    return (
        <Container>
            <Header />


            <CreateHabit>
                <h1>Meus hábitos</h1>
                <button onClick={() => setNewHabit(!newHabit)}>+</button>
            </CreateHabit>


            {newHabit && (
                <>
                    <NewHabit>
                        <input
                            value={titleHabit}
                            placeholder="nome do hábito"
                            onChange={(e) =>
                                setTitleHabit(e.target.value)}
                            type="text"
                            disabled={disabled} />
                        <DaysOfWeek>
                            {days.map((e, i) =>
                                <Day key={i} handleDay={e.selected} onClick={() => markDay(e.id)} disabled={disabled}>{e.day}</Day>
                            )}
                        </DaysOfWeek>
                        <ButtonsBox>
                            <CancelButton onClick={clearAndClose}>Cancelar</CancelButton>
                            {disabled ? (
                                <Loader>
                                    <ThreeDots
                                        height="40"
                                        width="40"
                                        radius="9"
                                        color="#FFF"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true} />
                                </Loader>
                            ) : (
                                <SaveButton onClick={saveHabit}>Salvar</SaveButton>
                            )}
                        </ButtonsBox>
                    </NewHabit>
                    <Overlay onClick={clearAndClose} />
                </>
            )}

            {(habits && habits.length !== 0) ? (
                <BoxHabits>
                    {habits.map((e) =>
                        <Habit key={e.id}>
                            <h1>{e.name}</h1>
                            <DaysOfWeek>
                                {days.map((d) =>
                                    <OneHabit key={d.id} handleDay={e.days.includes(d.id)} small>{d.day}</OneHabit>
                                )}
                            </DaysOfWeek>
                            <RemoveHabit onClick={() => removeHabit(e.id)} src={TrashIcon} alt="trash" />
                        </Habit>
                    )}
                </BoxHabits>
            ) : (
                <AlertHabit>
                    Você não tem nenhum hábito
                    cadastrado ainda. Adicione um hábito
                    para começar a trackear!
                </AlertHabit>
            )}


            <Footer />
        </Container>
    );
};

const Container = styled.div`
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CreateHabit = styled.div`
    padding: 100px 20px 20px 20px;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    width: 100%;

    button {
        width: 40px;
        height: 30px;
        font-size: 20px;
        font-weight: 700;
        color: #FFF;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        &:hover {
            background: #3E9ADE;
        }
    }
`;

const Loader = styled.div`
    display: flex;
    opacity: 0.7;
    justify-content: center ;
    align-items: center;
    background: #52B6FF;

    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
`;

const AlertHabit = styled.div`
    margin: 0 20px;
    color: #666;
    font-size: 18px;
    line-height: 22px;
`;

const NewHabit = styled.div`
    position: relative;
    width: 340px;
    height: 180px;
    background: #FFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    z-index: 2;

    input[type="text"] {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 305px;
        height: 45px;
        margin-top: 18px;
        font-size: 20px;
        padding-left: 10px;

        &::placeholder {
            color: #D5D5D5;
        }
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

const OneHabit = styled(Day)`
    pointer-events: none;
    &:hover {
        background: ${props => props.handleDay ? "#D5D5D5" : "#FFF"};
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

const Habit = styled.div`
    position: relative; 
    width: 340px;
    min-height: 91px;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-right: 30px;

    h1 {
        font-size: 20px;
        color: #666;
        padding: 13px 0 0 15px;
    }
`;

const BoxHabits = styled.div`
    margin-bottom: 100px;
`;

const RemoveHabit = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
    width: 14px;
    height: 15px;
    background: #FFF;
    cursor: pointer;
`;

export default Habits;