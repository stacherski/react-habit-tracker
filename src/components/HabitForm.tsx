import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";

type HabitFormProps = {
    addHabit: (name: string) => void
}

export function HabitForm({ addHabit }: HabitFormProps){
    const [name, setName] = useState("")

    function handleSubmit(e: SubmitEvent){
        e.preventDefault()
        if (name.trim() === "") return
        setName("")
        addHabit(name)
    }
    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="New habit..."
                className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"/>
            <Button disabled={name.trim() === ""} className="rounded-lg font-medium px-4 py-2">Add Habit</Button>
        </form>
    )
}