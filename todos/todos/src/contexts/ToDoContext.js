import { createContext,useContext , } from "react";

export const TodoContext =createContext({
    todo:[
        {
        id:1,
        todo:"todo msg",
        completed:false,
    }
    const addButton:(todo) =>{},
    updateTodo:(id,todo)
],

})

export const useTodo = () =>{
    return useContext(TodoContext)
}


export const Todoprovider = TodoContext.Provider 