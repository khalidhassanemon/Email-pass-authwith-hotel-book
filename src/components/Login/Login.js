import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Context/UserContext';
import './Login.css';
const Login = () => {

    const myStyle = {
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg')`
    };
    const { SignIn } = useContext(AuthContext);
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password.value;

      SignIn(email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        form.reset();
        navigate('/home');
      })
      .catch(error=>console.log("Error",error));
    }

    return (
        <div style={myStyle} className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
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