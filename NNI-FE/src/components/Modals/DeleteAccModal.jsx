import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

function DeleteAccModal({closeModal}) {

let token = localStorage.getItem('token')
 token = token.replace(/"/g, '')

  const deleteUser=()=>{
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/nni/delete-user',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      toast.success(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const navigate = useNavigate()

 const handleClick = ()=>{
  deleteUser();
  localStorage.removeItem('token');
  navigate('/login');
  
 }

  return (
    <div className=' w-full z-[999] fixed'>
      <ToastContainer/> 
      <div className='overflow-hidden top-1/2 left-1/2 -translate-x-[50%] p-10 -translate-y-[50%] xl:w-[597px] xl:h-[667px] w-[250px] h-[300px] rounded-3xl fixed z-[99] shadow-lg bg-white'>
     
          <div className='flex justify-center'>
            <img className='xl:w-[250px] xl:h-[250px] w-[50px] h-[50px]' src="./images/delete1.png" alt="" />
          </div>
          <div className='xl:text-[20px] flex-col items-center text-[16px] font-semibold flex justify-center xl:mt-5 mt-2 gap-5'>
            <h1 className='max-[769px]:hidden text-3xl'>Account Deletion</h1>
            <p className='font-normal max-[769px]:font-semibold'>Are you sure you want to delete your account ?</p>
          </div>
          <div className='flex gap-5 xl:items-end max-[769px]:flex-col w-full xl:mt-32 mt-5 xl:justify-end'>
            <button onClick={closeModal} className='border-[1px] border-black max-[769px]:bg-black max-[769px]:text-white rounded-lg hover:text-white hover:bg-black min-[769px]:p-3 max-[769px]:p-1 '>Cancel</button>
            <button onClick={()=>{handleClick()}} className='border-[1px] border-[red] rounded-lg hover:text-white hover:bg-[red] min-[769px]:p-3 max-[769px]:p-1 max-[769px]:bg-[red] max-[769px]:text-white'>Delete Account</button>
          </div>
      </div>
    </div>
  )
}

export default DeleteAccModal
