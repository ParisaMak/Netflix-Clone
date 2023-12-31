import React from 'react';
import { useNavigate , Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {
  const { logOut , user } =  UserAuth()
  const navigate = useNavigate();

  const handleLogOut = async () =>{
    try{
      await logOut();
       navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between p-4 z-10 absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link>
     {user?.email ? (
       <div>
       <Link to="/account">
         <button className="text-white pr-4">Account</button>
       </Link>
         <button onClick={handleLogOut} className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white">Log Out</button>
     </div>
     ) :(
      <div>
      <Link to="/login">
        <button className="text-white pr-4">Sign In</button>
      </Link>
      <Link to="/SignUp">
        <button className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white">Sign Up</button>
      </Link>
    </div>
     )

     }
    </div>
  );
}

export default Navbar;
