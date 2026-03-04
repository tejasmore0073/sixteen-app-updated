import { useSelector } from 'react-redux'
import Todo from './Todo'

const DisplayTodos = () => {

    const allTodos = useSelector(state => state.todos.value);

    return (
        <div>
            {
                allTodos.length > 0
                    ? allTodos.map(t => <Todo key={t.id} todo={t} />)
                    : <div className='text-center text-2xl'>No todos to display</div>
            }
        </div>
    )
}

export default DisplayTodos