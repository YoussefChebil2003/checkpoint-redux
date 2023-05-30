import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../toDoSlice'

const reducer = {
    todos: toDoReducer,
}

export default configureStore({
    reducer,
    
});
