import React, {useState} from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSignInUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg' alt='MAIN BACKGROUND' />
      </div>

      <form className='absolute p-8 bg-black w-3/12 mx-auto mt-60 left-0 right-0 flex flex-col text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl pb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm ? null : <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 rounded-sm'/>
        }
        <input type='email' placeholder='Email address' className='p-2 my-2 w-full bg-gray-700 rounded-sm'/>
        <input type='password' placeholder='Password' className='p-2 my-2 w-full  bg-gray-700 rounded-sm' />
        <button className='bg-red-700 p-4 my-6 w-full rounded-md cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-sm cursor-pointer' onClick={toggleSignInUpForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in now"}</p>
      </form>
    </div>
  ) 
}

export default Login