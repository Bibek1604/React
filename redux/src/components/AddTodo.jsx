import React from 'react'

function AddTodo() {
    return (
        <form onSubmit={addTodoHandler} className='space-x-3'></form>
    )
}

export default AddTodo
