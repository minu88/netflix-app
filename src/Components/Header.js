import { auth } from '../Utils/firebase1';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user.userInfo);
console.log("userInfo in header: ", userInfo);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.error("Sign out error: ", error);
    });
  }
  return (
    <div className='absolute w-full py-2 pl-2 pr-6 bg-gradient-to-b from-black/60 z-10 flex items-center justify-between'>
      <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix logo' className='h-16' />

      {userInfo && <div className='flex items-center gap-2'>
        <img src={userInfo?.photoURL} alt='User Avatar' className='h-8 w-8 rounded-sm' />
        <span className='text-white text-md font-semibold cursor-pointer' onClick={handleSignOut}>Sign Out</span>
      </div>}
    </div>
  )
}

export default Header