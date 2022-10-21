import { createContext, useState } from "react";

import dayjs from 'dayjs';

export const ProgressContext = createContext();

export function ProgressContextProvider({ children }) {

    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const [habitsToday, setHabitsToday] = useState([]);
    const [progressPorcentage, setProgressPorcentage] = useState(0);
    const dayOfWeek = daysOfWeek[dayjs().day()]

    const todayDate = dayjs().format("DD/MM")

    const [dateToday, setDateToday] = useState({
        dayWeek: dayOfWeek,
        date: todayDate,
    });

    return (
        <ProgressContext.Provider value={{ dateToday, habitsToday, setHabitsToday, progressPorcentage, setProgressPorcentage }}>
            {children}
        </ProgressContext.Provider>
    )
}