import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import backgroundImage from '../assets/inno.png';

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
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 8px 25px rgba(33, 150, 243, 0.5)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
  },
});

const Login = () => {
  const navigate = useNavigate();

  const options = [
    { title: 'Business looking for consultants', icon: <BusinessCenterIcon />, path: '/business-login' },
    { title: 'Consultancy', icon: <WorkIcon />, path: '/consultancy-login' },
  ];

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
            variant="h3"
            gutterBottom
            sx={{
              color: 'primary.contrastText',
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '2px 2px 8px rgba(33, 150, 243, 0.7)',
            }}
          >
            Login to SpitzenKlasse
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'primary.contrastText',
              textAlign: 'center',
              mb: 4,
              textShadow: '1px 1px 4px rgba(33, 150, 243, 0.5)',
            }}
          >
            Select your login type
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {options.map((option, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    background: 'linear-gradient(145deg, #2a2a2a, #383838)',
                    color: 'primary.contrastText',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      {option.icon}
                      {option.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(option.path)}
                      sx={{
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      Select
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
