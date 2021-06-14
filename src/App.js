import React, {useState} from 'react';
import LoginPage from './Component1/LoginPage';
import DashBoard from './Component1/Dashboard';

const  App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
      const storage=localStorage.getItem("logedIn")
      if (storage==="1")
      {
        setIsLoggedIn(true)
      }
      },[isLoggedIn])
    const clickLogin=(value)=>{
      setIsLoggedIn({isLoggedIn:value})
      return value
    }
    
    const clickLogout=()=>{
      setIsLoggedIn(false)
    }
     return (
    
        <>
       
         {!isLoggedIn && 
      <LoginForm clickLogin={clickLogin}/>
         }
         {isLoggedIn && 
         <div><DashBoard  data={clickLogout}/>
        </div>}
      
      </>
    
     )
     
  }
export default App;
