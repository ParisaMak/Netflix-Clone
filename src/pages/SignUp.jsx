import img from '../asset/img.jpg';
import { useNavigate , Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const SignUp = () => {

  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('')
  const { user , signUp } = UserAuth()
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
     await signUp(email , password)
     navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-red-600">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={img}
          alt="netflix-background"
        />
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen flex justify-center items-center">
          <div className="w-[450px] h-[500px] bg-black/75 text-white flex justify-center items-center">
            <div className="w-[320px] h-[400px] py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex py-4 flex-col">
                <input 
                  onChange={(e) => {setEmail(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => {setPassword(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already Subscribe to Netflix?
                  </span>{" "}
                  <Link to="/login">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;