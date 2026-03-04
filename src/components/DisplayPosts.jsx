import useFetchData from "../hooks/useFetchData";

const DisplayPosts = () => {

    const { data, error, loading } = useFetchData('https://jsonplaceholder.typicode.com/posts')

    if (error) return <h1 className="text-2xl text-red-500">{error}</h1>
    if (loading) return <h1 className="text-2xl text-green-500">Loading...</h1>

    return (
        <div className="px-10">
            <h1 className="text-4xl my-7">All Posts</h1>
            {
                data.map(p => <div className="mb-7 text-2xl">
                    <h3 className="text-3xl font-bold">{p.title}</h3>
                    <p>
                        {p.body}
                    </p>
                </div>)
            }
        </div>
    )
}

export default DisplayPosts