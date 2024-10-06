import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import VR360Viewer from './Features/VRExperience';
import Home from './components/Home';
import SignIn from './Authentication/SignIn';
import JourneyTracker from './Features/JourneyTracker';
import PrayerScheduler from './Features/PrayerScheduler';
import SacredTextLibrary from './Features/SacredTextLibrary';

// Create a custom MUI theme with DM Sans as the global font
const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif', // Set global font family to DM Sans
    letterSpacing:'-10px'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        body {
          font-family: 'DM Sans', sans-serif;
          letterSpacing:-1px;
        }
      `,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <JourneyTracker/>
     <PrayerScheduler/>
     <SacredTextLibrary/>
     <VR360Viewer/>
    </ThemeProvider>
  );
}
