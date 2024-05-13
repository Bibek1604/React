import { createSlice , nanoid  } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1 , text:"helloworld"}]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload) 
        },
        updateTodo:(state,action) =>{
            const {id,text} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.text = text
            }
        },
        toggleComplete:(state,action) =>{
            const {id} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.completed = !existingTodo.completed
            }
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer