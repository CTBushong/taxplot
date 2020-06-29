import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import AuthNav from '../../../../components/AuthNav'



const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#E3D16C',
      },
      secondary: {
        main: '#81924D',
      },
      warning: {
        main: '#F57B42',
      },
    },
    typography: {
        fontFamily: [
          'Courier New',
          'Courier',
          'monospace'
        ],
        button: {
          fontSize: '2rem',
        }
    }
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      
      flexGrow: 1,
    },
    
    title: {
      flexGrow: 1,
      color: 'black',   
    },
    authnav: {
      color: "dark",
    }
    
  }));


function NavigationHeader() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
          <Toolbar>
            
              <Typography variant="h2" className={classes.title}>
                TaxPlot
              </Typography>
            
            <AuthNav /> 
          </Toolbar>
        </AppBar>
      </ThemeProvider>  
  );
}

export default NavigationHeader;