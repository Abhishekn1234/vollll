import { useContext } from "react";
import React from 'react'
import logo from'../image/download.jpeg';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
export default function Navbar({login}) {
  const navigate=useNavigate();
  const{setModalOpen}=useContext(LoginContext);
  const loginStatusMobile=()=>{
    const token=localStorage.getItem("jwt")
    if(login||token){
     return[
      <>
      <Link to='/'>
        <li><span className="material-symbols-outlined">home</span></li></Link>
        <Link to='/profile'>
        <li><span className="material-symbols-outlined">account_circle</span></li></Link>
        <Link to='/createpost'>
        <li> <span className="material-symbols-outlined">Plus</span></li></Link>
        <li>
        <Link style={{marginLeft:"20px"}} to='/followingpost'>
        <span className="material-symbols-outlined">Explore</span>
          </Link>
        </li>
        
        <Link to="" onClick={()=>setModalOpen(true)}>
          <li>
          <span className="material-symbols-outlined">logout</span>
          </li> 
        </Link>
      </>
     ] 
    }
    else{
      return[
        <>
        <Link to='/signup'>
        <li>SignUp</li></Link>
        <Link to='/login'>
        <li>Log in</li></Link>
        </>
      ]
    }
  }
  const loginStatus=()=>{
    const token=localStorage.getItem("jwt")
    if(login||token){
     return[
      <>
        <Link to='/profile'>
        <li>Profile</li></Link>
        <Link to='/createpost'>
        <li>Create Post</li></Link>
        <Link style={{marginLeft:"20px"}} to='/followingpost'>
          My Following
          </Link>
        <Link to="" onClick={()=>setModalOpen(true)}>
          <button className='primaryBtn'>
              Log out
          </button> 
        </Link>
      </>
     ] 
    }
    else{
      return[
        <>
        <Link to='/signup'>
        <li>SignUp</li></Link>
        <Link to='/login'>
        <li>Log in</li></Link>
        </>
      ]
    }
  }
  
  return (
    <div className="navbar">
      <img src={logo} alt="" onClick={()=>{navigate('/')}} id="volt-logo" />
       
      <ul className='nav-menu'>
       {loginStatus()}
        
      </ul>
      <ul className="nav-mobile">
     {loginStatusMobile()}
      </ul>
    </div>
  )
}
