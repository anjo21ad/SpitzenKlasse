import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function LoginWithFirebase({ path }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(path); 
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(path); 
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      navigate(path); 
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      maxHeight: '80vh',
      minWidth: '400px', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 4,
      borderRadius: 2,
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)'
    }}>
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
        Login/Register
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        fullWidth
        sx={{ backgroundColor: 'background.paper', borderRadius: 1 }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
        sx={{ backgroundColor: 'background.paper', borderRadius: 1 }}
      />
      {error && <Typography color="error" variant="body2">{error}</Typography>}
      <Box sx={{ display: 'flex', gap: 2, mt: 2, width: '100%' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogin} 
          disabled={isLoading} 
          sx={{ flexGrow: 1, padding: '8px 0' }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={handleRegister} 
          disabled={isLoading} 
          sx={{ flexGrow: 1, padding: '8px 0' }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Register"}
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleGoogleLogin} 
          disabled={isLoading} 
          sx={{ flexGrow: 1, padding: '8px 0' }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Google Login"}
        </Button>
      </Box>
    </Box>
  );
}

export default LoginWithFirebase;