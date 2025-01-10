import './User.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData } from '../GlobalStates/UserSlice';
import { AxiosInstance } from '../Config/AxiosInstance';
import { useEffect } from 'react';

function Login() {
  const {loginData}=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleInput=(event)=>{ 
    dispatch(setLoginData({...loginData,[event.target.name]:event.target.value}))
    console.log(loginData);
  }

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    AxiosInstance.post('/user/login', loginData)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        console.error('Login error:', err.response ? err.response.data : err.message);
        if (err.response && err.response.data.message) {
          alert(`Login failed: ${err.response.data.message}`);
        } else {
          alert('Something went wrong. Please try again.');
        }
      });
  };
  

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='form-box'>
          <h1>Login</h1>
          <div className='input-box'>
            <input
             type="text" 
             name='email' 
             placeholder='Email' 
             onChange={handleInput} 
             value={loginData.email || ''} />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input
             type="password" 
             name='password' 
             placeholder='Password' 
             onChange={handleInput} 
             value={loginData.password || ''} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <Link>Forgot password?</Link>
          </div>

          <button  className='enter-button' onClick={handleLogin}>Login</button>

          <div className="login-link"><p>Don't have an account? <Link to='/signup'>Register</Link></p></div>
        </div>
      </div>
    </div>
  )
}

export default Login