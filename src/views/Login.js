import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, Select, MenuItem, InputLabel, ThemeProvider, createTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import backgroundImage from '../assets/inno.png';
import LoginWithFirebase from '../components/LoginWithFirebase';

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
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
  components: {
    MuiButton: {
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

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { title: 'Business', icon: <BusinessCenterIcon />, path: '/home' },
    { title: 'Consultancy', icon: <WorkIcon />, path: '/consultancy-login' },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
          backgroundSize: 'cover',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.contrastText',
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '2px 2px 8px rgba(33, 150, 243, 0.7)',
            }}
          >
            Welcome to SpitzenKlasse
          </Typography>
        </motion.div>

        <Typography variant="h6" sx={{ color: 'primary.contrastText', textAlign: 'center', mb: 4 }}>
          Select your login type
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="login-type-label">Login Type</InputLabel>
          <Select
            labelId="login-type-label"
            id="login-type"
            value={selectedOption}
            onChange={handleChange}
            aria-labelledby="login-type-label"
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.path}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {option.icon}
                  <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>{option.title}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedOption && (
          <Box sx={{ mt: 4 }}>
            <LoginWithFirebase path={selectedOption} />
          </Box>
        )}

      </Box>
    </ThemeProvider>
  );
};

export default Login;