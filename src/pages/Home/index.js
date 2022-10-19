import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LoginContext } from "../../contexts/LoginContext";
import { getHabits } from "../../services/GET";
import styled from 'styled-components';

const Home = () => {
    const { user } = useContext(LoginContext);
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

    console.log('daysHabit => ', daysHabit)

    useEffect(() => {
        getHabits(user.config)
            .then(ans => {
                setHabits(ans.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [user])

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


    return (
        <Container>
            <Header />


            <CreateHabit>
                <h1>Meus hábitos</h1>
                <button onClick={() => setNewHabit(!newHabit)}>+</button>
            </CreateHabit>


            {newHabit && (
                <NewHabit>
                    <input
                        value={titleHabit}
                        placeholder="nome do hábito"
                        onChange={(e) =>
                            setTitleHabit(e.target.value)}
                        type="text" />
                    <DaysOfWeek>
                        {days.map((e, i) =>
                            <Day key={i} handleDay={e.selected} onClick={() => markDay(e.id)}>{e.day}</Day>
                        )}
                    </DaysOfWeek>
                </NewHabit>
            )}

            <AlertHabit>
                Você não tem nenhum hábito
                cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </AlertHabit>

            <Footer />
        </Container>
    );
};

const Container = styled.div`
    width: 375px;
    height: 100vh;
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

const AlertHabit = styled.div`
    margin: 0 20px;
    color: #666;
    font-size: 18px;
    line-height: 22px;
`;

const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;

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

    &:hover {
        background: #F0F0F0;
    }
`;

export default Home;