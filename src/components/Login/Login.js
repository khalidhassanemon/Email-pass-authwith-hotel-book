import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {   
    const myStyle={
        backgroundImage:`url('https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg')`
                };
    return (
        <div style={myStyle}  className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>      
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='' required />
                </div>
                <input className='btn-submit' type='submit' value='login' />
            </form>
            <p className='ml-1 text-lime-400'>New to ema john?<Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;