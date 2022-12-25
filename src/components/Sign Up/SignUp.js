import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const myStyle={
        backgroundImage:`url('https://enterprisegoc.com/wp-content/uploads/2017/04/banner-1.jpg')`
                };
  
    return (
        <div style={myStyle} className='form-container'>
        <h1 className='form-title'>Sign Up</h1>
        <form >
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
    </div>
    );
};

export default SignUp;