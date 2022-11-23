import React from 'react'
import './App.css'


function Todo() {
    const [todo, setAddTodo] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    
    const getTodo = (e) => {
        e.preventDefault();
        if (todo === "") {
            alert("enter some value")
        }
        else {
            let todoObj = {
                id: Math.random(),
                todo: todo,
                date: Date.now(),

            }
            setTodos([todoObj, ...todos]);
            todos.unshift(todoObj);
            setAddTodo('')
        }
    }

    // const [todoText, setTodoText] = React.useState([todo]);
    const editTodo=(id, todo)=>{
        // todo = todo
        // let todoText = todo;
        console.log(todo)
        console.log(id)
    }

    const deleteTodo=(id)=>{
        console.log("this will be deleted"+id)
    }

    return (
        <>
            <div className="container">
                <div>
                    <form className="todoForm">
                        {/* <input type="text" placeholder='Add your ToDo here.' onChange={(e) => setAddTodo({ ...addTodo, text:e.target.value })} /> */}
                        <input type="text" placeholder='Add your ToDo here.' onChange={(e) => { setAddTodo(e.target.value) }} />
                        <button className='addTodo' onClick={(e) => getTodo(e)}>Add ToDo</button>
                    </form>
                </div>
                <div className="todoItems">
                    {
                        todos.map((res) => {
                            return (
                                <div key={res.id} className="todoItem">
                                    <div className="todoText">
                                        <p>{res.todo}</p>
                                    </div>
                                    <div className="todoAction">
                                        <button className="btnEdit" onClick={(e) => editTodo(res.id, res.todo)}>Edit</button>
                                        <button className="btnDelete" onClick={(e)=>deleteTodo(res.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Todo;
