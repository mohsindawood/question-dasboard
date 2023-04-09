import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const steps = [
  {
    label: "Getting Started",
  },
  {
    label: "11:00 AM",
  },
  {
    label: "12:00 PM",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        ".MuiStepLabel-root": {
          mt: 6,
          position: "relative",

          ".MuiStepLabel-iconContainer": {
            svg: {
              fontSize: 10,
              color: "#fff",
              boxShadow: "0px 0px 2px 3px #00000047",
              borderRadius: "50%",
            },
          },
          ".MuiStepLabel-labelContainer": {
            color: "#fff",
          },
        },
        ".MuiStepContent-root": {
          ml: 0.6,
        },
        ".MuiStepConnector-root": {
          ml: 0.6,
          ".MuiStepConnector-line": {
            minHeight: "100px",
          },
        },
        ".MuiTextField-root": {
          width: 150,
          mt: 3,
          ml: -3,
          bgcolor: "#d7d7d7",
          borderRadius: "12px",
          input: {
            color: "#000",
          },
          fieldset: {
            border: "none",
          },
        },
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        placeholder="steppper"
        defaultValue="stepper"
      />
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Box
                sx={{
                  position: "absolute",
                  left: -35,
                  top: 0,
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <Image src="/book.png" alt="book" width={30} height={50} />
              </Box>
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ height: "40vh" }}>
                {/* <div>
                  <Button
                    variant="contained"
                    
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
