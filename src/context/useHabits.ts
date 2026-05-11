import { useContext, type ReactNode } from "react"
import { HabitContext } from "./HabitProvider"

export type Habit = {
    id: string
    name: string
    completions: Date[]
}

export type Context = {
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

export type HabitProviderProps = {
    children: ReactNode
}

export function useHabits(){
    const habitContext = useContext(HabitContext)

    if (habitContext == null) throw new Error('Null context')

    return habitContext
}