import { AlertHabit, BoxHabits, Container, CreateHabit } from "./style";
import { getHabits, getHabitsOfDay } from "../../services/GET";
import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Habit from "../../components/Habit";
import Header from "../../components/Header";
import { LoginContext } from "../../contexts/LoginContext";
import NewHabit from "../../components/NewHabit";
import { ProgressContext } from "../../contexts/ProgressContext";

const Habits = () => {
    const { user } = useContext(LoginContext);
    const { habitsToday, setHabitsToday, setProgressPorcentage } = useContext(ProgressContext);

    const [habits, setHabits] = useState(undefined);
    const [newHabit, setNewHabit] = useState(false);
    const [reload, setReload] = useState(false);
    const [days, setDays] = useState([
        { id: 0, day: "D", selected: false },
        { id: 1, day: "S", selected: false },
        { id: 2, day: "T", selected: false },
        { id: 3, day: "Q", selected: false },
        { id: 4, day: "Q", selected: false },
        { id: 5, day: "S", selected: false },
        { id: 6, day: "S", selected: false }]);


    console.log('habits => ', habits)

    useEffect(() => {
        console.log('uma vez', user.config)
        getHabitsOfDay(user.config)
            .then(ans => {
                setHabitsToday(ans.data);
            })
            .catch(err => console.log(err))
    }, [reload])

    useEffect(() => {
        setProgressPorcentage((habitsToday.filter(e => e.done === true).length / habitsToday.length) * 100)
    }, [habitsToday])

    useEffect(() => {
        getHabits(user.config)
            .then(ans => {
                setHabits(ans.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [user, reload])

    return (
        <Container>
            <Header />

            <CreateHabit>
                <h1>Meus hábitos</h1>
                <button onClick={() => setNewHabit(!newHabit)}>+</button>
            </CreateHabit>

            {newHabit && (
                <NewHabit
                    days={days}
                    setDays={setDays}
                    reload={reload}
                    setReload={setReload}
                    setNewHabit={setNewHabit}
                    newHabit={newHabit} />
            )}

            {(habits && habits.length !== 0) ? (
                <BoxHabits>
                    {habits.map((infos, i) => <Habit key={i} infos={infos} setReload={setReload} reload={reload} days={days} />)}
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

export default Habits;