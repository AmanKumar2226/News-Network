import {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Account() {
const navigate = useNavigate()
  let token = localStorage.getItem('token')
  token=token.replace(/"/g, '')

const [details, setDetails] = useState({})

const handleLogout = ()=>{
  localStorage.removeItem('token');
  navigate('/login')
}

useEffect(()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/nni/get-users',
    headers: { 
      'Authorization': `Bearer ${token}`,
    },
  };
  
  axios.request(config)
  .then((response) => {
    setDetails(response.data.user);
  })
  .catch((error) => {
    console.log(error);
  });
  
},[])



console.log(details.banner);
// let date = details.dateOfBirth ? details.dateOfBirth.split("T")[0] : 'N/A';
// console.log(date)
 
  

const isCompleteUrl = (url) => {
  const regex = /^(http|https):\/\//;
  return regex.test(url);
};
const sanitizeUrl = (url) => {
  // Remove unwanted characters from the URL
  const cleanedUrl = url.replace(/[^\w-./:]/g, '');
  // Ensure there's a slash after "uploads"
  if (cleanedUrl.includes('uploads') && !cleanedUrl.includes('uploads/')) {
    return cleanedUrl.replace('uploads', 'uploads/');
  }
  return cleanedUrl;
};

const bannerUrl = details.banner
  ? isCompleteUrl(details.banner)
    ? sanitizeUrl(details.banner)
    : `http://localhost:8080/uploads/${sanitizeUrl(details.banner)}`
  : '';

  return (
    <div className='bg-[#FAFBFC]'>
        <div>
      <div className='mb-44 relative flex justify-center items-end'>
      <div className={`h-[350px] flex justify-end w-full items-end p-8 rounded-xl`} style={{ backgroundImage: `url(${bannerUrl})` }}>
      
        {/* <img className='h-[450px] w-[1632px] rounded-xl relative' src="./images/cover1.jpg" alt="" /> */}
        <button className='flex items-center gap-2 bg-[#8DD3BB] rounded-md py-2 px-4 h-[50px]'>
            <img src="./images/Upload.png" alt="" />
            <p className='text-[14px] font-medium'>Upload new cover</p>
          </button>
          
      </div>
      <div className='flex flex-col justify-center items-center absolute top-[280px] z-[999] gap-5'>
        <div>
          <img className='w-[150px] h-[150px] border-[3px] border-[#FF8682] rounded-full' src={details.profilePicture} alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-[24px] font-semibold '>{details.firstName} {details.lastName}</h1>
          <p className='text-[16px] font-normal'>{details.email}</p>
        </div>
        </div>
      </div>
      {/* <div className="flex gap-10 w-full p-3 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] mb-10 rounded-2xl">
          <div className="w-[33%] border-r-[2px] p-2">
            <a href="/account"><h1 className="mb-2">Account</h1></a>
          </div>
          <div className="w-[33%] border-r-[2px] p-2">
            <a href="account-history"><h1 className="mb-2">History</h1></a>
          </div>
          <div className="w-[33%] p-2">
            <a href="/account-payment"><h1 className="mb-2">Payment methods</h1></a>
          </div>
        </div> */}
    </div>
      <section className='font-["Montserrat"] mx-32 mt-12'>
        
        <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>Account</h1>
        <div className="flex flex-col gap-8 w-full py-8 px-6 shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] font-['Montserrat'] rounded-2xl">
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Name</p>
              <h1 className='text-[20px] font-semibold'>{details.firstName +" "+ details.lastName}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full '>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Email</p>
              <h1 className='text-[20px] font-semibold'>{details.email}</h1>
            </div>
            <div className='flex gap-2'>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Add_circle_small.png" alt="" />
                <p>Add another email</p>
              </button>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Password</p>
              <h1 className='text-[20px] font-semibold'>************</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Phone number</p>
              <h1 className='text-[20px] font-semibold'>{details.phoneNumber}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Address</p>
              <h1 className='text-[20px] font-semibold'>{details.address}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175]'>Date of birth</p>
              <h1 className='text-[20px] font-semibold'>{details.dateOfBirth}</h1>
            </div>
            <div>
              <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex items-center gap-2 rounded'>
                <img src="./images/Edit.png" alt="" />
                <p>Change</p>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center my-10'>
          <button className='border-[1px] border-[#8DD3BB] py-2 px-4 flex justify-center w-[50%] items-center gap-2 rounded' onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </div>
  )
}

export default Account
