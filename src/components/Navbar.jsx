import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Navbar = () => {

    const count = useSelector(state => state.counter.value);

    const allTodos = useSelector(state => state.todos.value);
    const completedTodos = allTodos.filter(t => t.status);
   
    return (
        <nav className="flex items-center justify-between px-7 bg-gray-900 text-white">
            <ul className="flex items-center gap-8 text-2xl py-4">
                <li><Link to="/">TodoApp</Link></li>
                <li><Link to="/counter-app">CounterApp</Link></li>
                <li><Link to="/all-users">Users</Link></li>
                <li><Link to="/all-posts">Posts</Link></li>
            </ul>

            <ul className="flex items-center gap-8 text-2xl py-4">
                <li>Count: {count}</li>
                <li>All Todos: {allTodos.length}</li>
                <li>Completed: {completedTodos.length}</li>
            </ul>
        </nav>
    )
}

export default Navbar