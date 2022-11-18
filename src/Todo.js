import React from 'react'
import './App.css'


function Todo() {
    const getTodo = (e) => {
        e.preventDefault();
        let todoObj={
            id: Math.random(),
            todo: todo
        }
        todos.unshift(todoObj);
        setAddTodo('')
        console.log(todos);
    }
    let todos= []
    const [todo, setAddTodo] = React.useState('');
    return (
        <>
            <div className="container">
                <div>
                    <form className="todoForm">
                        {/* <input type="text" placeholder='Add your ToDo here.' onChange={(e) => setAddTodo({ ...addTodo, text:e.target.value })} /> */}
                        <input type="text" value={todo} placeholder='Add your ToDo here.' onChange={(e)=>{setAddTodo(e.target.value)}} />
                        <button className='addTodo' onClick={(e) => getTodo(e)}>Add ToDo</button>
                    </form>
                </div>

                <div className="todoItems">
                    <div className="todoItem">
                        <div className="todoText">
                            <p>This is a todo. </p>
                        </div>

                        <div className="todoAction">
                            <button className="btnEdit">Edit</button>
                            <button className="btnDelete">Delete</button>
                        </div>
                    </div>

                    <div className="todoItem">
                        <div className="todoText">
                            <p>This is todo1</p>
                        </div>

                        <div className="todoAction">
                            <button className="btnEdit">Edit</button>
                            <button className="btnDelete">Delete</button>
                        </div>
                    </div>

                    <div className="todoItem">
                        <div className="todoText">
                            <p>This is todo1</p>
                        </div>

                        <div className="todoAction">
                            <button className="btnEdit">Edit</button>
                            <button className="btnDelete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
