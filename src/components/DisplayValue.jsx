import { useSelector } from "react-redux"

const DisplayValue = () => {

    const count = useSelector(state => state.counter.value);

    return (
        <div>
            <h1 className="text-8xl">{count}</h1>
        </div>
    )
}

export default DisplayValue