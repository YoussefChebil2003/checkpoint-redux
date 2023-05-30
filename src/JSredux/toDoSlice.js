import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: "todos",
    initialState: [
        {id: 1, title: 'todo1', completed: false},
        {id: 2, title: 'todo2', completed: false},
        {id: 3, title: 'todo3', completed: true},
        
    ],
    reducers: {
        addTodo: (state, action) => {
            const newToDo = {
                id: Date.now(),
                title: action.payload.title,
                completed: true,
            };
            state.push(newToDo); //adding new Todo element to the state array
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },
        deleteToDo: (state, action) => {
            return state.filter(
                (todo) => todo.id !== action.payload.id
            );
            //WHY DO WE RETURN 
        }
    }

});

export const {addTodo, toggleComplete, deleteToDo} = toDoSlice.actions; 
//after defining the reducers in the createSlice function, that fct will return the actions throug the toDoSlice variable we created

export default toDoSlice.reducer;
//because we'll be importing this reducer in the store