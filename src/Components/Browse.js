import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const userInfo = useSelector((store) => store.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if(!userInfo?.email) {
        navigate('/');
      }
    }, 3000);
    // eslint-disable-next-line
  }, [userInfo]);

  return (
    <div className='h-screen w-screen'>
      <Header />
      <p className='text-lg font-semibold pt-20'>Welcome {userInfo?.displayName} </p>
    </div>
  )
}

export default Browse