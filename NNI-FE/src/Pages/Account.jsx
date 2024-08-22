import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DeleteAccModal from '../components/Modals/DeleteAccModal';
import Breadcrumb from '../components/breadcrumb';
function Account() {
  const navigate = useNavigate()
  let token = localStorage.getItem('token')
  token = token.replace(/"/g, '')

  const [details, setDetails] = useState({})
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/login')
  }

  useEffect(() => {
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

  }, [])



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

    const showModal = ()=>{
      setisClicked(true);
  }
  const [isClicked, setisClicked] = useState(false);
    const closeModal = () => setisClicked(false);


  return (
    <>
    {isClicked && <DeleteAccModal closeModal={closeModal} />}
   <Breadcrumb/>
    <div className='bg-[#FAFBFC] dark:bg-[#2A2C38] dark:text-white'>
      
      <div className='w-full'>
        <div className='min-[769px]:mb-44 relative flex max-[769px]:h-[400px]  w-full justify-center '>
          <div className={`min-[769px]:h-[500px] max-[769px]:h-[330px] bg-no-repeat max-[769px]:bg-contain max-[769px]:object-cover bg-cover flex justify-end w-full items-end min-[769px]:mx-32 min-[769px]:my-10 rounded-xl`} style={{ backgroundImage: `url(${bannerUrl})` }}>

            {/* <img className='h-[450px] w-[1632px] rounded-xl relative' src="./images/cover1.jpg" alt="" /> */}
          </div>
          <div className='flex flex-col justify-center items-center absolute top-[450px] max-[769px]:top-[170px] z-[50] gap-5'>
            <div>
              <img className='min-[769px]:w-[150px] min-[769px]:h-[150px] max-[769px]:h-[100px] max-[769px]:w-[100px] border-[3px] border-[#FF8682] rounded-full' src={details.profilePicture} alt="" />
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
      <section className='font-["Montserrat"] min-[768px]:mx-32 max-[769px]:mx-2 min-[769px]:mt-12'>

        <h1 className='font-bold text-[32px] font-["Trade_Gothic_LT_Std"] mb-4'>Account</h1>
        <div className="flex flex-col gap-8 w-full py-8 px-6 dark:bg-[#1F1F1F] shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] font-['Montserrat'] rounded-2xl">
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Name</p>
              <h1 className='text-[20px] font-semibold'>{details.firstName + " " + details.lastName}</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full '>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Email</p>
              <h1 className='text-[20px] font-semibold'>{details.email}</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Password</p>
              <h1 className='text-[20px] font-semibold'>************</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Phone number</p>
              <h1 className='text-[20px] font-semibold'>{details.phoneNumber}</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Address</p>
              <h1 className='text-[20px] font-semibold'>{details.address}</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-[16px] font-normal text-[#11221175] dark:text-white'>Date of birth</p>
              <h1 className='text-[20px] font-semibold'>{details.dateOfBirth}</h1>
            </div>

          </div>
        </div>
        <div className='xl:w-[50%] w-full xl:ml-[410px] gap-5 flex flex-col xl:flex-row justify-center items-center xl:my-10 mt-10'>
          <button onClick={()=>{navigate('/update-profile')}} className='border-[1px]  bg-[#8DD3BB] dark:bg-[#1F1F1F] hover:border-[#8DD3BB] hover:bg-white py-2 px-4 flex justify-center w-[50%] items-center gap-2 rounded'>
            Edit Profile
          </button>
          <button onClick={showModal} className='border-[1px] text-white hover:text-black bg-[#ff0505] dark:bg-[#1F1F1F] hover:border-[#ff0505] hover:bg-white py-2 px-4 flex justify-center w-[50%] items-center gap-2 rounded'>
            Delete Profile
          </button>
        </div>
        <div className='w-full flex justify-center items-center xl:my-10 my-5'>
          <button className='border-[1px] hover:bg-[#8DD3BB] border-[#8DD3BB] py-2 px-4 flex justify-center w-[50%] items-center gap-2 rounded' onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </div>
    </>
  )
}

export default Account
