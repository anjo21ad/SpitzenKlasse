// Experience.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, TextField, Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem, Slider, CardContent, ThemeProvider, useTheme, createTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

const Experience = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [demographyAndExperience, setDemographyAndExperience] = useState({
    contractStart: '',
    contractEnd: '',
    address: '',
    language: '',
    educationLevel: '',
    experience: '',
    wageRange: [100, 1000],
    urgency: '',
  });

  const handleNext = () => {
    const combinedData = { ...location.state, demographyAndExperience };
    navigate('/skills', { state: combinedData });
  };

  const handleBack = () => {
    navigate('/create-project');
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}>
        <motion.Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ maxWidth: 600, m: 3, p: 3, background: 'linear-gradient(145deg, #2a2a2a, #383838)', boxShadow: '0px 8px 25px rgba(33, 150, 243, 0.5)' }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ color: 'primary.contrastText', textAlign: 'center', mb: 3, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Project Experience</Typography>

            <Grid container spacing={2}>
              {Object.entries(demographyAndExperience).map(([key, value]) => (
                <Grid item xs={12} key={key}>
                  <FormControl fullWidth variant="outlined" sx={{ '& .MuiInputLabel-root': { color: theme.palette.primary.contrastText }, '& .MuiOutlinedInput-root': { color: theme.palette.primary.contrastText, '& fieldset': { borderColor: theme.palette.primary.contrastText }, '&:hover fieldset': { borderColor: 'primary.main' }, '&.Mui-focused fieldset': { borderColor: 'primary.main' } } }}>
                    {key === 'address' ? (
                      <TextField
                        label="Address"
                        value={value}
                        onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                      />
                    ) : key === 'contractStart' || key === 'contractEnd' ? (
                      <TextField
                        type="date"
                        label={key === 'contractStart' ? 'Contract Start' : 'Contract End'}
                        value={value}
                        onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                        InputLabelProps={{ shrink: true }}
                      />
                    ) : key === 'wageRange' ? (
                      <Box sx={{ padding: 2 }}>
                        <Typography sx={{ color: theme.palette.primary.contrastText }}>Wage Range: {value[0]} - {value[1]} kr/hr</Typography>
                        <Slider
                          value={value}
                          onChange={(e, newValue) => setDemographyAndExperience(prev => ({ ...prev, wageRange: newValue }))}
                          valueLabelDisplay="auto"
                          min={100}
                          max={3000}
                          sx={{
                            '& .MuiSlider-thumb': {
                              '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${theme.palette.secondary.main}33`,
                              },
                            },
                            '& .MuiSlider-track': {
                              border: 'none',
                            },
                            '& .MuiSlider-rail': {
                              opacity: 0.5,
                            },
                          }}
                        />
                      </Box>
                    ) : (
                      <>
                        <InputLabel id={`${key}-label`}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</InputLabel>
                        <Select
                          labelId={`${key}-label`}
                          value={value}
                          label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                          onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backdropFilter: 'blur(4px)',
                                backgroundColor: 'rgba(30,30,30,0.9)',
                                boxShadow: theme.shadows[5],
                                color: theme.palette.primary.contrastText,
                              },
                            },
                          }}
                        >
                          {key === 'language' && ['English', 'Danish', 'German'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                          {key === 'educationLevel' && ['Bachelor', 'Master', 'PhD'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                          {key === 'experience' && ['1-2 years', '3-5 years', '5+ years'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                          {key === 'urgency' && ['Low - 7 Days', 'Medium - 3 days', 'High - 24 Hours'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                        </Select>
                      </>
                    )}
                  </FormControl>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ borderColor: customTheme.palette.primary.main, color: customTheme.palette.primary.contrastText }}>
                Back
              </Button>
              <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleNext}>
                Next
              </Button>
            </Box>
          </CardContent>
        </motion.Card>
      </Box>
    </ThemeProvider>
  );
};

export default Experience;
