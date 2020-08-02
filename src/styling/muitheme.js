import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
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
    },
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: 'hidden',
        },
      },
    },
  });

  export const useStyles = makeStyles((theme) => ({
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