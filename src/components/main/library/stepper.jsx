import * as React from "react";
import Image from "next/image";
import {
  Fab,
  StepContent,
  StepLabel,
  Step,
  Stepper,
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const steps = [
  {
    label: "09:00 AM",
    title: "Welcome",
    detail: "Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.",
    img: "/chapter.png",
  },
  {
    label: "11:00 AM",
    title: "Chapter 1",
    detail: "Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.",
    img: "/chapter1.png",
  },
  {
    label: "12:00 PM",
    title: "Chapter 1",
    detail: "Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.",
    img: "/chapter1.png",
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
        bgcolor: "#212121",
        p: 4,
        ".MuiStepLabel-root": {
          mt: 3,
          ml: 3,
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
          ml: 3.6,
        },
        ".MuiStepConnector-root": {
          ml: 3.6,
          ".MuiStepConnector-line": {
            minHeight: "100px",
          },
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Fab
          sx={{
            bgcolor: "#e0e0e03b",
            color: "rgb(114 114 114 / 87%)",
          }}
        >
          <ClearRoundedIcon />
        </Fab>
        <Typography variant="h4" fontWeight={300}>
          Study Plan
        </Typography>
      </Stack>
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
              <Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h5">{step.title}</Typography>
                  <IconButton
                    size="small"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    <ArrowOutwardIcon />
                  </IconButton>
                </Stack>
                <Typography variant="body2">{step.detail}</Typography>
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    width: "100%",
                    borderRadius: "12px",
                    img: {
                      borderRadius: "12px",
                      objectFit: "contain",
                    },
                  }}
                >
                  <Image src={step.img} alt="" layout="fill" />
                </Box>
                <Divider />
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
