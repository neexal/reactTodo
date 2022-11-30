import React from 'react'
import './App.css'


function Todo() {
    const [todo, setAddTodo] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    var add = true;

    const getTodo = (e) => {
        e.preventDefault();
        if (todo === "") {
            alert("Please Update the Value")
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

    // const [editText, setEditText] = React.useState([]);
    // const editTodo=(e,i, todo)=>{
    //     document.getElementById("hello").value = todo;
    //     add = false;
    //     console.log(i)
    // }

    const updateTodo=(e, id,i)=>{
        e.preventDefault();
        console.log("updating")
        if (todo === "") {
            alert("Please Update the Value")
        }
        else {
            let todoObj = {
                todo: todo,
                date: Date.now(),
            }
            setTodos([todoObj, ...todos]);
            todos.unshift(todoObj);
            setAddTodo('')
        }
    }

    const deleteTodo=(e,id)=>{
        delete todos[id];
    }

    return (
        <>
            <div className="container">
                <div>
                    <form className="todoForm">
                        {/* <input type="text" placeholder='Add your ToDo here.' onChange={(e) => setAddTodo({ ...addTodo, text:e.target.value })} /> */}
                        <input id='hello' type="text" placeholder='Add your ToDo here.' onChange={(e) => { setAddTodo(e.target.value) }} 
                        value={todo} />
                        <button className='addTodo' onClick={(e) =>add ? getTodo(e): updateTodo(e)} >Add ToDo</button>
                    </form>
                </div>
                <div className="todoItems">
                    {
                        todos.map((res,id) => {
                            return (
                                <div key={res.id} className="todoItem">
                                    <div className="todoText">
                                        <p>{res.todo}</p>
                                    </div>
                                    <div className="todoAction">
                                        <button className="btnEdit" 
                                        onClick={(e) => {
                                            // editTodo(e,id,res.todo)
                                            setAddTodo(res.todo)
                                        }
                                        }>Edit</button>
                                        {/* <button className="btnEdit" onClick={(e)=>setAddTodo(todos[index]['todo'])}>Edit</button> */}
                                        <button className="btnDelete" onClick={(e)=>deleteTodo(e,id)}>Delete</button>
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
