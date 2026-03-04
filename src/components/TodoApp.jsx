import AddTodo from "./AddTodo"
import DisplayTodos from "./DisplayTodos"

const TodoApp = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto">
        <h1 className="text-center text-5xl my-7">My Todo App</h1>
        <AddTodo />
        <DisplayTodos />
    </div>
  )
}

export default TodoApp