import React, {useState, useRef, useEffect} from 'react';
import Header from './Header';
import { validateForm } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase1';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo } from '../Utils/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user.userInfo);
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formError, setFormError] = useState(null);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // if user is already logged in, navigate to browse page
    if(userInfo?.email) {
      navigate('/browse');
    }

  }, [userInfo]);

  const toggleSignInUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const onFormButtonClick = (e) => {
    e.preventDefault();
    console.log("button: ", fullNameRef.current?.value, emailRef.current?.value, passwordRef.current?.value);
    const error = validateForm(emailRef.current?.value, passwordRef.current?.value, fullNameRef.current?.value);
    setFormError(error);

    if(error) return;

    if(!isSignInForm) {
      // Sign Up user
      createUserWithEmailAndPassword(auth, emailRef.current?.value, passwordRef.current?.value)
        .then((userCredential) => {
          // Signed up 
          console.log("userCredential sign up ->  userCredential: ", userCredential);
        
          updateProfile( auth.currentUser, {
              displayName: fullNameRef.current?.value,
              photoURL: "https://lh3.googleusercontent.com/a/ACg8ocI0XYm-Kplz9I_I_WkkjmkyNSTIy7Ug1UzG8tlXC535TDUkNZ0=s432-c-no"
            })
            .then(() => {
              const user = auth.currentUser;
              dispatch(addUserInfo({
                displayName: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email,
                uid: user?.uid,
              }));
              navigate('/browse');
            })
            .catch((error) => { 
              console.error("updateCurrentUser error: ", error);
              navigate('/');
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorCode === 'auth/email-already-in-use' ? 'Email is already in use' : errorMessage);
          navigate('/');
        });
    } else {
      // Sign In user
      signInWithEmailAndPassword(auth, emailRef.current?.value, passwordRef.current?.value)
        .then((userCredential) => {
          // Signed in 
          console.log("userCredential sign in: ", userCredential);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorCode === 'auth/invalid-credential' ? 'Invalid email or password' : errorMessage);
          navigate('/');
        });
    }
  }
  
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg' alt='MAIN BACKGROUND' />
      </div>

      <form className='absolute p-8 bg-black w-3/12 mx-auto mt-40 left-0 right-0 flex flex-col text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl pb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm ? <input type='text' placeholder='Full Name' ref={fullNameRef} className='p-2 my-2 w-full bg-gray-700 rounded-sm'/> : null
        }
        <input type='email' placeholder='Email address' ref={emailRef} className='p-2 my-2 w-full bg-gray-700 rounded-sm'/>
        <input type='password' placeholder='Password' ref={passwordRef} className='p-2 my-2 w-full  bg-gray-700 rounded-sm' />
        {formError && <p className='text-red-500 text-sm'>{formError}</p>}
        <button onClick={onFormButtonClick} className='bg-red-700 p-4 my-6 w-full rounded-md cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-sm cursor-pointer' onClick={toggleSignInUpForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in now"}</p>
      </form>
    </div>
  ) 
}

export default Login