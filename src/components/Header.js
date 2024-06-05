import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useMediaQuery, ThemeProvider, Button } from '@mui/material';
import testLogo from '../assets/testLogo.png'; // Husk at opdatere stien til logoet efter behov
import { createTheme } from '@mui/material/styles';
import { getAuth, signOut } from "firebase/auth";

// Brug customTheme fra dit home view
const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          boxShadow: '0px 4px 15px rgba(245, 0, 87, 0.4)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

function Header() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');
  const auth = getAuth();

  const navigateHome = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); 
    } catch (error) {
      console.error("Fejl ved logout:", error);
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Ændret til space-between
        padding: matches ? '15px 30px' : '10px 20px',
        background: customTheme.palette.background.paper, // Bruger paper-farven fra temaet for at matche home view
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      }}>
        <Box onClick={navigateHome} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src={testLogo} alt="SpitzenKlasse Logo" style={{ height: matches ? '60px' : '50px', marginRight: '15px' }} />
          <Typography variant={matches ? 'h4' : 'h5'} sx={{ color: customTheme.palette.primary.contrastText, fontWeight: 'bold' }}>SpitzenKlasse</Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handleLogout}>Log ud</Button>
      </Box>
    </ThemeProvider>
  );
}

export default Header;