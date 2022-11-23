import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

    const serverData={
        username : 'admin',
        password : 'password'
      }
      
    const checkAuth=(e)=>{
        e.preventDefault();
        if(authData.text===serverData.username && authData.password===serverData.password){
          console.log("Login Successful")
          navigate("/todo");
        }
        else{
          alert("Login Unsuccessful")
        }
      }
    
      const [authData, setAuthData] = React.useState({});

  return (
    <div className="App">
      <form className='loginForm'>
      <h1>Login Form</h1>
      <label htmlFor="">Username:</label>
      <input type="text" name="" id="" placeholder="Enter Username:"
        onChange={(e)=>setAuthData({...authData,text:e.target.value})}
      />
      <label htmlFor="">Password:</label>
      <input type="password" name="" id="" placeholder="Enter Password:" 
        onChange={(e)=>setAuthData({...authData,password:e.target.value})}
      />
      <button className='btnLogin' onClick={(e)=>checkAuth(e)}>Login</button>
    </form>
    </div>
  )
}

export default Login