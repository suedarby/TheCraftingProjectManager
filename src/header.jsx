// import {} from 'firebase';
import {auth, provider  } from './firebase'
import {signInWithPopup, signOut}from 'firebase/auth'
import React from 'react';

function Header() {

  const googleSignIn =(e) =>{

      e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(`I'm logged ${result}`);
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }

  const logOut =()=>{
    signOut(auth).then(()=>{
      console.log("I'm logged out");

    }).catch((error)=>{
      console.log(error.message);
    });
  };
  return (
    <div className='taskManager' id='taskmanager 1'>
        <header id='A'>Craft Project
        <div className="px-3 py-2 bg-dark text-white" id='text white 2'>
        <div className="container" id='container 3'>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id='alignment 4'>
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small" id ='menu'>
              <li id='home'>
                <a href="#" className="nav-link text-secondary">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Home
                </a>
              </li>
              <li id='dash'>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Dashboard
                </a>
              </li>
              <li id ='features'>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Features
                </a>
              </li>
              <li id='about'>
                <a href="#" className="nav-link text-white" >
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3" id='border bottom 5'>
        <div className="container d-flex flex-wrap justify-content-center" id='justify 6'>
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" id='search'>
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div class="text-end">
          {/* <button type="button" class="btn btn-light text-dark me-2">Login</button> */}
          <button onClick={googleSignIn}> Sign in with Google</button>
      <button onClick={logOut}>Log out</button>
      
          </div>
        </div>
        </div>
        </header>
    </div>
  
  );
}
          
  export default Header
