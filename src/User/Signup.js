import './User.css'
import { FaUser, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../GlobalStates/UserSlice';

function Signup() {
  const {signupData}=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  
  const handleInput=(event)=>{ 
    dispatch(setSignupData({...signupData,[event.target.name]:event.target.value}))
    console.log(signupData);
  }

  const handleSignup=()=>{
    console.log(signupData);
    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, signupData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res)=>{
      alert('Signup Successfull')
      navigate('/');
    })
    .catch((err) => {
      console.error('Signup error:', err.response ? err.response.data : err.message);
      if (err.response && err.response.data.message) {
        alert(`Signup failed: ${err.response.data.message}`);
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  }

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='form-box'>
          <h1>Sign up</h1>
          <div className='input-box'>
            <input
             type="text" 
             name='username' 
             placeholder='Username' 
             onChange={handleInput} 
             value={signupData.username || ''} />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input
             type="email" 
             name='email' 
             placeholder='Email' 
             onChange={handleInput} 
             value={signupData.email || ''}/>
            <IoMail className='icon' />
          </div>

          <div className='input-box'>
            <input
             type="password" 
             name='password' 
             placeholder='Password' 
             onChange={handleInput} 
             value={signupData.password || ''} />
            <FaLock className='icon' />
          </div>

          <div className='input-box'>
            <input
             type="number" 
             name='mobile'
             placeholder='Mobile' 
             onChange={handleInput}
             value={signupData.mobile || ''} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button className='enter-button' onClick={handleSignup}>Register</button> 

          <div className="login-link"><p>Already have an account? <Link to='/'>Login</Link></p></div>
        </div>
      </div>
    </div>
  )
}

export default Signup