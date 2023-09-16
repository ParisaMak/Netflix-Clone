
import img from '../asset/img.jpg';
import { useNavigate , Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const LogIn = () => {

  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('')
  const [ error , setError ] = useState('')
  const { logIn} = UserAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try{
      await logIn(email , password)
      navigate('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-red-600">
        <img
          className="sm:block absolute w-full h-full object-cover"
          src={img}
          alt="netflix-background"
        />
        
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen flex justify-center items-center z-20">
          <div className="w-full h-full bg-black/75 text-white flex justify-center items-center sm:w-[450px] sm:h-[500px]">
            <div className="w-[320px] h-[400px] py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
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
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    New to Netflix?
                  </span>{" "}
                  <Link to="/signup">
                    Sign Up
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

export default LogIn;