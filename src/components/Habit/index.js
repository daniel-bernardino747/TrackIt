import { Container, DaysOfWeek, OneHabit, RemoveHabit } from "./style"

import { LoginContext } from "../../contexts/LoginContext";
import TrashIcon from '../../assets/images/trashIcon.svg';
import { deleteHabitRequest } from "../../services/DELETE";
import { useContext } from "react";

const Habit = ({ setReload, reload, infos, days }) => {
    const { user } = useContext(LoginContext);


    const removeHabit = (id) => {
        console.log("removed habit")

        deleteHabitRequest(id, user.config)
            .then(ans => {
                console.log(ans)
                setReload(!reload);
            })
            .catch(err => console.log(err));
    }

    return (
        <Container key={infos.id}>
            <h1>{infos.name}</h1>
            <DaysOfWeek>
                {days.map((d) =>
                    <OneHabit key={d.id} handleDay={infos.days.includes(d.id)}>{d.day}</OneHabit>
                )}
            </DaysOfWeek>
            <RemoveHabit onClick={() => removeHabit(infos.id)} src={TrashIcon} alt="trash" />
        </Container>
    );
};

export default Habit;