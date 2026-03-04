import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../features/todoSlice';

const AddTodo = () => {

    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!userInput) return;
        dispatch(addNewTodo(userInput));
        setUserInput('');
    }

    return (
        <div className='my-10'>
            <input type="text" className='text-3xl p-2 rounded-xl w-full border mb-5' placeholder='Type todo here..' onChange={e => setUserInput(e.target.value)} value={userInput} />

            <div className="text-center">
                <button type="button" className='bg-blue-400 text-2xl p-2 rounded-xl cursor-pointer' onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AddTodo