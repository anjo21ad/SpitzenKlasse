import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
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

const AssignmentDescription = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

    const handleSnackbarOpen = () => setOpenSnackbar(true);
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const saveAssignment = async () => {
        if (!description.trim()) {
            handleSnackbarOpen();
            return;
        }

        const assignmentToSave = { description };

        try {
            console.log('Assignment saved successfully:', assignmentToSave);
            handleSnackbarOpen();
            navigate('/assignment-created');
        } catch (error) {
            console.error('Error saving assignment:', error);
            handleSnackbarOpen();
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                backgroundSize: 'cover',
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: customTheme.palette.primary.contrastText }}>Assignment Description</Typography>

                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 3, maxWidth: '600px' }}
                />

                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/skills')} sx={{ borderColor: customTheme.palette.primary.main, color: customTheme.palette.primary.contrastText }}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" endIcon={<SaveIcon />} onClick={handleDialogOpen}>
                        Save
                    </Button>
                </Stack>

                <Dialog open={openDialog} onClose={handleDialogClose}>
                    <DialogTitle>Confirm Save</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to save this assignment description?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Cancel</Button>
                        <Button onClick={() => { saveAssignment(); handleDialogClose(); }} autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message="Assignment saved successfully"
                />
            </Box>
        </ThemeProvider>
    );
};

export default AssignmentDescription;
