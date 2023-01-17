interface HabitProps {
    completed: number //declarando que o componente Habit vai receber uma propriedade com um número
}

export function Habit(props: HabitProps) {

    return (
        <div className='bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center'>
            {props.completed}
        </div>
    )
}