import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase1";
import { addUserInfo } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const userinfo = user;
      
      const userObj = {
        displayName: userinfo.displayName ?? '',
        email: userinfo.email ?? '',
        photoURL: userinfo.photoURL ?? '',
        uid: userinfo.uid ?? '',
      }
     
      if(userObj?.displayName && userObj?.email) {
        console.log("if condition met for userObj in body: ", userObj);
        dispatch(addUserInfo(userObj));
      }
    } else {
      // User is signed out
      // ...
      dispatch(addUserInfo(null));
      console.log("userinfo logout: ", user);
    }
  });


  return (
    <>
    </>
  )
}

export default Body