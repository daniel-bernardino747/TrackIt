import { ButtonsBox, CancelButton, CreateOneHabit, Day, DaysOfWeek, Input, Overlay, SaveButton } from "./style";
import { useContext, useEffect, useState } from "react";

import Loader from "../Loader";
import { LoginContext } from "../../contexts/LoginContext";
import { createHabit } from "../../services/POST";

const NewHabit = ({ days, setDays, reload, setReload, setNewHabit, newHabit }) => {
    const { user, disabled, setDisabled } = useContext(LoginContext);
    const [daysHabit, setDaysHabit] = useState([]);
    const [titleHabit, setTitleHabit] = useState("");

    useEffect(() => {
        setDisabled(false)
    }, [])

    const markDay = (index) => {

        const newDays = days.map((e) => {
            if (index === e.id) {
                return { ...e, selected: !e.selected }
            } else {
                return e
            }
        })
        const newDaysHabits = newDays.filter(e => e.selected).map(e => e.id)

        setDays(newDays);
        setDaysHabit(newDaysHabits);
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

    const clearAndClose = () => {
        setTitleHabit("");
        setNewHabit(false);
        const newDays = days.map(e => { return { ...e, selected: false } });
        setDays(newDays);
        setReload(!reload);
        setDisabled(false);
    }

    return (
        <>
            <CreateOneHabit>
                <Input
                    value={titleHabit}
                    placeholder="nome do hábito"
                    onChange={(e) =>
                        setTitleHabit(e.target.value)}
                    disabled={disabled} />
                <DaysOfWeek>
                    {days.map((e, i) =>
                        <Day key={i} handleDay={e.selected} onClick={() => markDay(e.id)} disabled={disabled}>{e.day}</Day>
                    )}
                </DaysOfWeek>
                <ButtonsBox>
                    <CancelButton onClick={() => setNewHabit(!newHabit)}>Cancelar</CancelButton>
                    {disabled ? (
                        <Loader sizeSmall />
                    ) : (
                        <SaveButton onClick={saveHabit}>Salvar</SaveButton>
                    )}
                </ButtonsBox>
            </CreateOneHabit>

            <Overlay onClick={() => setNewHabit(!newHabit)} />
        </>
    );
};

export default NewHabit;