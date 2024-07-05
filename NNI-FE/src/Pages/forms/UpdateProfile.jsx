import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Breadcrumb from '../../components/breadcrumb';
function UpdateProfile() {
    let token = localStorage.getItem('token')
  token = token.replace(/"/g, '')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    dateOfBirth: "",
  });

 const handleUpdate = () =>{
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/nni/update-user',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`
    },
    data: details
  };
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
 }
  
  

  const handleChange = (evt) => {
    setDetails({ ...details, [evt.target.name]: evt.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleUpdate();
    navigate("/account")
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
   <>
   <Breadcrumb/>
    <div className=' my-10 min-[769px]:mx-48 max-[769px]:mx-2 dark:text-white'>
      <ToastContainer/> 
      <div className='my-2 mb-5'>
        <div className='flex gap-2 mb-2'>
          <img className='py-2' src="./images/red-icon.png" alt="" />
        <h1 className='text-2xl font-semibold'>Update Details</h1>
        </div>
        
        <p>Change any details you like to</p>
      </div>
      <form className='flex flex-col gap-10' action="" onSubmit={onSubmit}> 
       <div className='flex justify-between'>
        <div className='flex flex-col justify-between'>
          
        <div className='flex max-[769px]:flex-col justify-between max-[769px]:gap-2 gap-7'>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="firstName">First Name</label>
            <input onChange={handleChange} value={details.firstName} className="bg-[#F5F5F5] min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4 dark:text-black" type="text" id='firstName' name='firstName'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} value={details.lastName} className="bg-[#F5F5F5] min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4 dark:text-black" type="text" id='lastName' name='lastName'/>
          </div>
          
        </div>
        <div className='flex max-[769px]:flex-col justify-between'>
          <div className='flex flex-col gap-2 relative'>
            <label className="font-semibold" htmlFor="password">Password</label>
            <input 
              onChange={handleChange}
              value={details.password}
              className="bg-[#F5F5F5] min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4 pr-10 dark:text-black"
              type={isPasswordVisible ? "text" : "password"}
              id='password'
              name='password'
            />
            <img 
            
              src={isPasswordVisible ? "./images/visible.png" : "./images/invisible.png"}
              alt="toggle visibility"
              className="absolute top-12 right-3 w-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>y
          
        </div>
        <div className='flex max-[769px]:flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="address">Address</label>
            <input onChange={handleChange} value={details.address} className="bg-[#F5F5F5] dark:text-black min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4" type="text" id='address' name='address'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
            <input onChange={handleChange} value={details.dateOfBirth} className="bg-[#F5F5F5] dark:text-black w-[488px] h-[48px] rounded-xl px-4" type="date" id='dateOfBirth' name='dateOfBirth'/>
          </div>
         
        </div>
        </div>
        <div>
        </div>
       </div>
        <div className='flex max-[769px]:flex-col justify-between'>
        <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="userName">User Name</label>
            <input onChange={handleChange} value={details.userName} className="dark:text-black bg-[#F5F5F5] min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4" type="text" id='userName' name='userName'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="email">Email</label>
            <input onChange={handleChange} value={details.email} className="bg-[#F5F5F5] dark:text-black min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4" type="email" id='email' name='email'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="phoneNumber">Phone Number</label>
            <input onChange={handleChange} value={details.phoneNumber} className="bg-[#F5F5F5] dark:text-black min-[769px]:w-[488px] max-[769px]:w-[358px] h-[48px] rounded-xl px-4" type="text" minLength={10} maxLength={10} id='phoneNumber' name='phoneNumber'/>
          </div>
        </div>
        
        <div>
          <div className='flex justify-end'>
            <button type='submit' className='py-[10px] gap-3  h-[40px] flex pl-[16px] pr-[24px] text-white items-center justify-center bg-[#F81539BF] rounded-2xl'>
              <img className='w-[20px] h-[20px]' src="./images/sign-up.png" alt="sign-up" />
              Update Profile
            </button>
          </div>
          <div className='text-center my-10'>
            <p className='text-lg font-semibold'>Already have an account? <a href="/login" className="text-[#F81539BF]"> Login</a></p>
          </div>
        </div>
      </form>
    </div></>
  )
}

export default UpdateProfile;
