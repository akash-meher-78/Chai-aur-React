import React, { createContext, useContext } from "react";

export const UserContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Message",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) =>{}, 
    deleteTodo: (id) => {},
    toggledComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(UserContext)
}

export  const TodoProvider = UserContext.Provider