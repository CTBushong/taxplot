import React from 'react'
import Button from '@material-ui/core/Button';
import { auth, useAuth } from "gatsby-theme-firebase";
import { Link } from 'gatsby'


function AuthNav() {
  const { isLoggedIn, profile } = useAuth()
  
  let authnav
  if (isLoggedIn) {
    
    const uid = profile.uid
   
    

    authnav = <Link to="/user"><Button
    >{profile.displayName}</Button></Link>
  }
  else {
    authnav = <Link to="/login"><Button>Login</Button></Link>
  }

  return authnav
}
  
export default AuthNav;