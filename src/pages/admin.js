import React, {useContext, useEffect} from "react";
import { navigate } from 'gatsby';
import { GlobalStateContext } from "../components/UserContext"
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";

import {auth, useAuth, firestore, useFirestoreDoc } from "gatsby-theme-firebase";

import EditableCourses from "../components/EditableCourses";


function AdminPage () {
  
  useEffect(() => {
    if (isLoggedIn) {
      console.log("data: ", data)
    }
    else {
      
    }
  }, [isLoggedIn]);

  const { isLoggedIn, profile } = useAuth()
  const {userState, setUserState} = useContext(GlobalStateContext)
  const [data, isLoading, error] = useFirestoreDoc(
    firestore.collection("users").doc(userState.uid)
  );
  
    
    return (
      <Layout>
        <EditableCourses/>
      </Layout>
    );
}

export default AdminPage