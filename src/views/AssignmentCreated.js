import React from 'react';
import { Box, Typography, Button, Stack, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
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
  },
});

const AssignmentCreated = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: customTheme.palette.primary.contrastText }}>SpitzenKlasse</Typography>
                <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: customTheme.palette.primary.contrastText }}>
                    Thanks for creating an assignment. In the next 24 hours, you will receive recommended CV's.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/assignment-description')} sx={{ borderColor: customTheme.palette.primary.main, color: customTheme.palette.primary.contrastText }}>
                        Back
                    </Button>
                    <Button variant="contained" endIcon={<ListIcon />} onClick={() => navigate('/home')} sx={{ background: customTheme.palette.primary.main, '&:hover': { background: customTheme.palette.primary.dark } }}>
                        Home
                    </Button>
                </Stack>
            </Box>
        </ThemeProvider>
    );
};  

export default AssignmentCreated;
