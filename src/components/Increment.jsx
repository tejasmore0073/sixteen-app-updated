import { useDispatch } from "react-redux"
import { incrementValue } from "../features/counterSlice";

const Increment = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button type="button" className='bg-blue-400 rounded-xl p-2 text-3xl cursor-pointer' onClick={() => dispatch(incrementValue())}>Increment</button>
        </div>
    )
}

export default Increment