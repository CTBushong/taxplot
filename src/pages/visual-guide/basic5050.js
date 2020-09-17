import React from 'react';
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

function Basic5050() {
    
    return (
      <Layout>
        <LiveProvider code="<strong>Hello World!</strong>">
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </Layout>
      )
    }
  
  export default Basic5050;