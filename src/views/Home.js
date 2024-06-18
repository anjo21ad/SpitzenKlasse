import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InsightsIcon from '@mui/icons-material/Insights';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import backgroundImage from '../assets/inno.png';
import { getAuth, signOut } from "firebase/auth";

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

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  if (!auth.currentUser) {
    navigate('/'); // Redirekter til login-siden, hvis brugeren ikke er logget ind
    return null; // Afslut rendringen
  }

  // Fjern handleLogout funktionen herfra
  
  const actions = [
    { title: 'Find Consultant', icon: <FindInPageIcon />, path: '/create-project' },
    { title: 'View Projects', icon: <ViewListIcon />, path: '/projects' },
    { title: 'Consultant Profiles', icon: <PeopleIcon />, path: '/cv-list' },
    { title: 'About Us', icon: <InfoIcon />, path: '/about' },
    { title: 'Contact Us', icon: <ContactMailIcon />, path: '/contact' },
    { title: 'Analytics', icon: <InsightsIcon />, path: '/analytics' },
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
            Welcome to SpitzenKlasse
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
            Connecting businesses with top IT consultants
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {actions.map((action, index) => (
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
                      {action.icon}
                      {action.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(action.path)}
                      endIcon={<ArrowForwardIosIcon />}
                      sx={{
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      Explore
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

export default Home;