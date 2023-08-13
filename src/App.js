import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes ,Route}  from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from './components/protectedRoute'


function App() {
  return (
    <>
    <AuthContextProvider >
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element ={<LogIn />}/>
        <Route path='/SignUp' element ={<SignUp />}/>
        <Route 
          path='/Account' 
          element ={
          <ProtectedRoute >
            <Account />
          </ProtectedRoute >
          }
        />
      </Routes>
    </AuthContextProvider>
    </>
   
  );
}

export default App;
