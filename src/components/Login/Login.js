import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';
import app from '../firebase/firebase.config';

const auth=getAuth(app);
const Login = () => {
    const provider =new GoogleAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/home';
    const myStyle = {
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg')`
    };
    const handleGoogleSignIn=()=>{
         signInWithPopup(auth,provider)
         .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, { replace: true });
         })
         .catch(error=>console.error('Error',error));
    }
    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.log("Error", error));
    }

    return (
        <div>
            <Container>
                <Row>
                <Col lg="10">
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
                    </Col>
                    <Col lg="2" className='mt-4'>
                        <ButtonGroup vertical>
                            <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                            <Button variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;