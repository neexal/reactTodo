
import React from 'react'
import './App.css'


function Todo() {
    const [todo, setAddTodo] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [isAdd, setIsAdd] = React.useState(true);
    const [index, setIndex] = React.useState(null);

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
    //     document.getElementById("hello").values = todo;
    //     add = false;
    //     console.log(i)
    // }

    const edit= (e, todoData, id)=>{
        e.preventDefault();
        setIsAdd(false);
        setAddTodo(todoData);
        setIndex(id);
        console.log(todo);
        console.log(id)
    }

    const updateTodo=(e)=>{
        e.preventDefault()
        let data = todos.map((res, id)=>{
            if(id === index){
                todos[index].todo=todo;
            }
            return res;
        })
        setTodos(data);
        setIsAdd(true);
        setAddTodo('');
    }

    const deleteTodo=(e,id)=>{
        e.preventDefault();
        let data = todos.filter((res)=>{
            return res.id !== id;
        })
       console.log(data)

       setTodos(data);
    }
    return (
        <>
            <div className="container">
                <div>
                    <form className="todoForm">
                        {/* <input type="text" placeholder='Add your ToDo here.' onChange={(e) => setAddTodo({ ...addTodo, text:e.target.value })} /> */}
                        <input type="text" placeholder='Add your ToDo here.' onChange={(e) => { setAddTodo(e.target.value) }} 
                        value={todo} />
                        <button className='addTodo' onClick={(e) => isAdd ? getTodo(e): updateTodo(e)} >{isAdd ? 'Add ToDo' : 'Edit'}</button>
                    </form>
                </div>
                <div className="todoItems">
                    {
                        todos.map((res,i) => {
                            return (
                                <div key={res.id} className="todoItem">
                                    <div className="todoText">
                                        <p>{res.todo}</p>
                                    </div>
                                    <div className="todoAction">
                                        <button className="btnEdit" 
                                        onClick={(e, todo) => {
                                            // editTodo(e,id,res.todo)
                                            edit(e, res.todo, i)
                                        }
                                        }>Edit</button>
                                        {/* <button className="btnEdit" onClick={(e)=>setAddTodo(todos[index]['todo'])}>Edit</button> */}
                                        <button className="btnDelete" onClick={(e)=>deleteTodo(e,res.id)}>Delete</button>
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
