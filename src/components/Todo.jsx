import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, updateTodoStatus } from "../features/todoSlice";
import { useState } from "react";

const Todo = ({ todo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(todo.text);
    const dispatch = useDispatch();

    const handleUpdateTodo = () => {
        dispatch(updateTodo({
            id: todo.id,
            text: editedValue
        }))

        setIsEditing(false);
    }

    return (
        <div className={`p-4 rounded-xl flex justify-between items-center mb-4 ${todo.status? 'bg-green-100': 'bg-blue-100'}`}>
            {
                isEditing
                    ? <div>
                        <input type="text" className="border bg-white text-2xl p-1"
                            onChange={e => setEditedValue(e.target.value)}
                            value={editedValue} />
                    </div>
                    : <div className="text-2xl" onClick={() => dispatch(updateTodoStatus(todo.id))}> {todo.text}</div>
            }
            <div>
                {
                    isEditing
                        ? <button type="button" className='p-2 bg-green-100 text-green-600 rounded-xl font-bold text-xl cursor-pointer' onClick={handleUpdateTodo}><IoCheckmarkCircle /></button>
                        : <button type="button" className='p-2 bg-yellow-100 text-yellow-600 rounded-xl font-bold text-xl cursor-pointer' onClick={() => setIsEditing(true)}><FaEdit /></button>
                }
                <button type="button" className='p-2 bg-red-100 text-red-600 rounded-xl font-bold text-xl cursor-pointer'
                    onClick={() => dispatch(deleteTodo(todo.id))} ><MdDeleteForever /></button>
            </div>
        </div>
    )
}

export default Todo