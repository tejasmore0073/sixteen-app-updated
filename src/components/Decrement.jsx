import { useDispatch } from "react-redux"
import { decrementValue } from "../features/counterSlice";

const Decrement = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button type="button" className='bg-blue-400 rounded-xl p-2 text-3xl cursor-pointer' onClick={() => dispatch(decrementValue())}>Decrement</button>
        </div>
    )
}

export default Decrement