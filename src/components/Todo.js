import React from 'react';

const Todo = ({text, todo, todos, setTodos, index}) =>{
    //EVENTS CODE
    const deleteHandler = (i) => {
        // console.log(i)
        let tempTodos = [...todos];
        tempTodos.splice(i,1);
        setTodos(tempTodos);
    };
    const completeHandler = (i) => {
        let tempTodos = [...todos];
        tempTodos[i].completed = !tempTodos[i].completed;
        setTodos(tempTodos);
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={()=>completeHandler(index)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={()=>deleteHandler(index)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;