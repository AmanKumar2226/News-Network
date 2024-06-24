
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [isValidated, setIsValidated] = useState(false)

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (evt) =>{
    setUser({ ...user, [evt.target.name]: evt.target.value });
  }

  const handleValidation = () =>{
   
    if(user.email=="" || user.password==""){
      toast.error("please fill both fields")
      setIsValidated(false)
    
    }
    
    else if(user.password.length<8){
      toast.error("Please enter more than or equal to 8 characters")
      setIsValidated(false)
    } 
    else{
      // toast.success('login su  ccessfull')
      setIsValidated(true)
      login()
    //  navigate('/')
  }
    


}

  const login = ()=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/nni/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : user 
    };     
    
    axios.request(config)
    .then((response) => {
      console.log(response.data)  
      localStorage.setItem('token', JSON.stringify(response.data.token))
      console.log(response.data.token);
      if(response.data.message == "user not found") {
        toast.error(response.data.message)
      }
      else{
        navigate("/") 
      }
    })
    .catch((error) => {
      console.log(error.data)
      console.log(error);
    });
  }

  const isExist = (e) =>{

    e.preventDefault();
  handleValidation();
     
  }

  return (
    <div className='my-10'>
      <ToastContainer/>
      <div className='my-2 mb-10 flex justify-center mr-36'>
        <div>
        <div className='flex gap-2 mb-2'>
          <img className='py-3' src="./images/red-icon.png" alt="" />
          <h1 className='text-2xl font-semibold'>Login</h1>
        </div>
        
        <p>Login using your account email and password</p>
        </div>
        
      </div>
      <form className='flex flex-col items-center gap-10' action=""> 
        <div className='flex flex-col gap-2'>
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input onChange={handleChange} value={user.email} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="email" id='email' name='email'/>
        </div>

        <div className='flex flex-col gap-2 relative'>
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input onChange={handleChange} value={user.password} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4"
          type={isPasswordVisible ? "text" : "password"}
            id='email' name='password'/>
            <img 
              src={isPasswordVisible ? "./images/visible.png" : "./images/invisible.png"}
              alt="toggle visibility"
              className="absolute top-12 right-3 w-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
        </div>
        <div className='flex justify-center'>
          <button onClick={isExist} className='p-2 gap-4 h-[40px] flex pl-[16px] pr-[24px] text-white items-center justify-center bg-[#F81539BF] rounded-2xl'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
