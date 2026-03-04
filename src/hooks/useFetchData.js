import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setData(response.data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    return { data, error, loading }
}

export default useFetchData;