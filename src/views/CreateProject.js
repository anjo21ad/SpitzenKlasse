import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Button, Modal, Box, TextField, Typography,
  Card, CardContent, ThemeProvider, createTheme,
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
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

const CreateProjectScreen = () => {
  const [projectName, setProjectName] = useState('');
  const [region, setRegion] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/experience', { state: { projectName, region } });
  };

  const handleBack = () => {
    navigate('/home');
  };

  const displayRegion = () => region === '' ? 'Select Time Zone' : region;

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
          sx={{ maxWidth: 500, m: 3, p: 3, background: 'linear-gradient(145deg, #1e1e1e, #383838)', boxShadow: '0px 8px 25px rgba(33, 150, 243, 0.5)' }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ color: customTheme.palette.secondary.contrastText, textAlign: 'center', mb: 3 }}>
              Find Consultant
            </Typography>

            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
            />

            <Button variant="contained" fullWidth sx={{ mb: 3 }} onClick={() => setIsPickerVisible(true)}>
              {displayRegion()}
            </Button>

            <Modal
              open={isPickerVisible}
              onClose={() => setIsPickerVisible(false)}
              aria-labelledby="region-modal-title"
              aria-describedby="region-modal-description"
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.default',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
                backdropFilter: 'blur(8px)',
                background: 'linear-gradient(145deg, #2a2a2a, #383838)',
              }}>
                <FormControl fullWidth>
                  <InputLabel id="region-modal-label">Zone</InputLabel>
                  <Select
                    labelId="region-modal-label"
                    value={region}
                    label="Region"
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <MenuItem value="Europe">Europe (CET)</MenuItem>
                    <MenuItem value="USA">USA (GMT)</MenuItem>
                    <MenuItem value="Asia">Asia (UTC)</MenuItem>
                    <MenuItem value="Domestic">Domestic</MenuItem>
                  </Select>
                </FormControl>
                <Button sx={{ mt: 2 }} variant="contained" fullWidth onClick={() => setIsPickerVisible(false)}>Done</Button>
              </Box>
            </Modal>

            <Button variant="contained" color="primary" fullWidth onClick={handleNext} startIcon={<ArrowForwardIcon />}>
              Next
            </Button>

            <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ mt: 2, color: customTheme.palette.secondary.contrastText }}>
              Back to Home
            </Button>
          </CardContent>
        </motion.Card>
      </Box>
    </ThemeProvider>
  );
};

export default CreateProjectScreen;
