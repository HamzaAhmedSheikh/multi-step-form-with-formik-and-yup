import React from 'react';
import { AppBar, Box, Container, CssBaseline, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { theme } from './theme';
import './App.css';
import Home from './components/MultiStepForm';

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <AppBar position="fixed">
       <Toolbar variant="dense">
        <Typography variant="h6"> Multi-Step Form </Typography>
       </Toolbar>
      </AppBar>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container>
          <Box marginTop={10}>
            <Home />
          </Box>
        </Container>
     </ThemeProvider> 
    </>
  );
}

export default App;
