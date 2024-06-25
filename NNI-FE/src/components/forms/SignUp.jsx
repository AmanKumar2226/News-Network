import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    address: "",
    dateOfBirth: "",
    banner: "",
  });

  const [isSame, setIsSame] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleChange = (evt) => {
    setNewUser({ ...newUser, [evt.target.name]: evt.target.value });
  };

  const handleProfilePictureChange = (event) => {
    const selectedFile = event.target.files[0];
    setNewUser({ ...newUser, profilePicture: selectedFile });
  };

  const handleBannerChange = (event) =>{
    const selectedBanner = event.target.files[0];
    setNewUser({...newUser, banner: selectedBanner });
  }

  const saveUser = async () => {
    try {
      const formData = new FormData();

      formData.append('firstName', newUser.firstName);
      formData.append('lastName', newUser.lastName);
      formData.append('userName', newUser.userName);
      formData.append('email', newUser.email);
      formData.append('phoneNumber', newUser.phoneNumber);
      formData.append('password', newUser.password);
      formData.append('confirmPassword', newUser.confirmPassword);
      formData.append('address', newUser.address);
      formData.append('dateOfBirth', newUser.dateOfBirth);
      formData.append('profilePicture', newUser.profilePicture);
      formData.append('banner', newUser.banner)

      const response = await fetch('http://localhost:8080/api/nni/sign-up', {
        method: 'POST',
        body: formData, // Use FormData for file upload
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    validatePassword();
    console.log(newUser);
  };

  const validatePassword = () => {
    if (newUser.password !== newUser.confirmPassword) {
      document.getElementById("err").innerText = "Please enter the same password";
      document.getElementById('err').style.color = "red";
      setIsSame(false);
    } else {
      setIsSame(true);
      saveUser();
      navigate('/login');
      toast.success("User registered successfully");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className=' my-10 mx-48'>
      <ToastContainer/> 
      <div className='my-2 mb-5'>
        <div className='flex gap-2 mb-2'>
          <img className='py-2' src="./images/red-icon.png" alt="" />
        <h1 className='text-2xl font-semibold'>Sign Up</h1>
        </div>
        
        <p>Register with us to publish your articles</p>
      </div>
      <form className='flex flex-col gap-10' action="" onSubmit={onSubmit}> 
       <div className='flex justify-between'>
        <div className='flex flex-col justify-between'>
          
        <div className='flex justify-between gap-7'>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="firstName">First Name</label>
            <input onChange={handleChange} value={newUser.firstName} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="text" id='firstName' name='firstName'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="text" id='lastName' name='lastName'/>
          </div>
          
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2 relative'>
            <label className="font-semibold" htmlFor="password">Password</label>
            <input 
              onChange={handleChange}
              value={newUser.password}
              className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4 pr-10"
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
          </div>
          <div className='flex flex-col gap-2 relative'>
            <label className="font-semibold" htmlFor="confirmPassword">Confirm Password</label>
            <input 
              onChange={handleChange}
              value={newUser.confirmPassword}
              className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4 pr-10"
              type={isConfirmPasswordVisible ? "text" : "password"}
              id='confirmPassword'
              name='confirmPassword'
            />
            <img 
              src={isConfirmPasswordVisible ? "./images/visible.png" : "./images/invisible.png"}
              alt="toggle visibility"
              className="absolute top-12 right-3 w-5 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
            <p id='err'></p>
          </div>
          
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="address">Address</label>
            <input onChange={handleChange} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="text" id='address' name='address'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
            <input onChange={handleChange} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="date" id='dateOfBirth' name='dateOfBirth'/>
          </div>
         
        </div>
        </div>
        <div>
        <div>
          <label className="font-semibold" htmlFor="profilePicture">
              Profile Picture
          </label>
          <div className='flex bg-[url("./images/banner-icon.png")] bg-no-repeat bg-center justify-center w-[488px] h-[340px] items-center bg-[#F5F5F5] rounded-xl mt-2'>
              <div className='border-[2px] border-dashed rounded-xl w-[95%] flex gap-5 flex-col items-center justify-center h-[95%]' >
              
              <input className="opacity-0 h-full w-full" onChange={handleProfilePictureChange} type="file" id='profilePicture' name='profilePicture'/>
              </div>  
          </div>
        </div>
        </div>
       </div>
        <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="userName">User Name</label>
            <input onChange={handleChange} value={newUser.userName} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="text" id='userName' name='userName'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="email">Email</label>
            <input onChange={handleChange} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="email" id='email' name='email'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className="font-semibold" htmlFor="phoneNumber">Phone Number</label>
            <input onChange={handleChange} className="bg-[#F5F5F5] w-[488px] h-[48px] rounded-xl px-4" type="text" minLength={10} maxLength={10} id='phoneNumber' name='phoneNumber'/>
          </div>
        </div>
        <div>
          <label className="font-semibold" htmlFor="banner">
              Add Banner
          </label>
          <div className='flex bg-[url("./images/banner-icon.png")] bg-no-repeat bg-center justify-center items-center bg-[#F5F5F5] h-[170px] rounded-xl mt-2'>
              <div className='border-[2px] border-dashed w-[98%] rounded-xl flex items-center justify-center h-[85%]' >
              
              <input className='opacity-0 h-full w-full' onChange={handleBannerChange} type="file" id='banner' name='banner'/>
              </div> 
          </div>
        </div>
        
        <div>
          <div className='flex justify-end'>
            <button type='submit' className='py-[10px] gap-3  h-[40px] flex pl-[16px] pr-[24px] text-white items-center justify-center bg-[#F81539BF] rounded-2xl'>
              <img className='w-[20px] h-[20px]' src="./images/sign-up.png" alt="sign-up" />
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
