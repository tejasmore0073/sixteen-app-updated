import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const todoSlice = createSlice({
    initialState,
    name: 'todos',
    reducers: {
        addNewTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                status: false
            }
            state.value.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            state.value = state.value.filter(t => t.id != id);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.value.find(t => t.id == id);
            if (todo) todo.text = text;
        },
        updateTodoStatus: (state, action) => {
            const id = action.payload
            const todo = state.value.find(t => t.id == id);
            if (todo) todo.status = !todo.status
        }
    }
});

export const { addNewTodo, deleteTodo, updateTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer