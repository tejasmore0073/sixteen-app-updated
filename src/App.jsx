import { Provider } from "react-redux"
import CounterApp from "./components/CounterApp"
import { store } from "./app/store"
import Navbar from "./components/Navbar"
import TodoApp from "./components/TodoApp"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayUsers from "./components/DisplayUsers"
import DisplayPosts from "./components/DisplayPosts"
const App = () => {
    return (
        <Provider store={store}>

            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<TodoApp />} />
                    <Route path="/counter-app" element={<CounterApp />} />
                    <Route path="/all-users" element={<DisplayUsers />} />
                    <Route path="/all-posts" element={<DisplayPosts />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App