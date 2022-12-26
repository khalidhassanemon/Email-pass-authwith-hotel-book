import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const SignUp = () => {
    const myStyle = {
        backgroundImage: `url('https://enterprisegoc.com/wp-content/uploads/2017/04/banner-1.jpg')`
    };

    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password.value;

        if (password !== confirm) {
            setError("Your password didn't match");
            return;
        }
        if (password < 6) {
            setError("Password should be more than 6 character or more");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("please Provide At least two Uppercase");
            return;
        }
        if (!/(?=.*[#@&*?!])/.test(password)) {
            setError("Please Provide at least one special chracter");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error));
    }

    return (
        <div style={myStyle} className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name='confirm' id='' required />
                </div>
                <input className='btn-submit' type='submit' value='Sign Up' />
            </form>
            <p className='text-lime-500'>Already have an Account?<Link className='text-amber-400' to='/login'>Login</Link></p>
            <p className='text-red-600'>{error}</p>
        </div>
    );
};

export default SignUp;