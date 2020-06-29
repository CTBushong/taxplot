import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Button from '@material-ui/core/Button';


import { auth, useAuth } from "gatsby-theme-firebase";


function UserPage() {
    const { isLoggedIn, profile } = useAuth();
    
    let something;
    if (isLoggedIn) 
      something = profile.displayName
    else 
      something = "Who is this?"
    


    
  return (
    <Layout>
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>{something}</Headings.h1>
          <Button 
            onClick={() => auth.signOut()}
          >
          Sign Out
          </Button>
        </div>
      </Section>
    </Layout>
  );
}

export default UserPage;
