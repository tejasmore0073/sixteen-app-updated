import useFetchData from "../hooks/useFetchData"

const DisplayUsers = () => {

   const { data, error, loading } = useFetchData('https://jsonplaceholder.typicode.com/users')

    if (error) return <h1 className="text-2xl text-red-500">{error}</h1>
    if (loading) return <h1 className="text-2xl text-green-500">Loading...</h1>

    return (
        <div className="px-10">
            <h1 className="text-4xl my-7">All Users</h1>
            {
                data.map(u => <div className="mb-5 text-2xl">
                    {u.name} <br />
                    {u.email}
                </div>)
            }
        </div>
    )
}

export default DisplayUsers