// src/components/JourneyTracker.js
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Box, Button } from '@mui/material';

function JourneyTracker() {
  const steps = ['Arrived at Sacred Mountain', 'Prayer at Ancient Temple', 'Reached Holy Shrine'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Pilgrimage Journey Tracker</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2 }}>Pilgrimage Complete</Typography>
      ) : (
        <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
          Next Step
        </Button>
      )}
    </Box>
  );
}

export default JourneyTracker;
