import React from 'react';

 function DashBoard(props) {
    const logOut=()=>{
  localStorage.removeItem("logedIn")
  props.data()
    }
     
          return (
           <>
                <h1 >DashBoard</h1>
                <p >Logged in.....</p>
                <button className="logout" onClick={logOut}>
                   LogOut 
                    </button>
            </>  
          )
  }
export default DashBoard;