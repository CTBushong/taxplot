import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from '../components/UserContext'


import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import { navigate } from 'gatsby';


import { auth, useAuth } from "gatsby-theme-firebase";


function UserPage() {
  const { userState } = useContext(GlobalStateContext)

  useEffect(() => {
    if (userState.loggedIn) {
      
    }
    else {
      
    }
  }, [userState]);


  function AdminButton() {

  }
  
  const something = "something something something"

  return (
    <Layout>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>{something}</Headings.h1>
          <button 
            onClick={() => auth.signOut()}
          >
          Sign Out
          </button>
        </div>
    </Layout>
  );
}

export default UserPage;
