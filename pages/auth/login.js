import React from 'react'
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Paper, Typography, Box } from '@mui/material';
import Image from 'next/image';
import LoginForm from '../../src/components/login/loginForm';

const RootStyle = styled('div')(({ theme }) => ({
  background: "url(/images/bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .login-card": {
    maxWidth: "1170px",
    width: "100%",
    background: "#2121218c",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    color: "#fff",
    padding: theme.spacing(5, 7.5)
  }
}));

export default function Login() {
  return (
    <RootStyle>
      <Paper className='login-card'>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item sm={12} md={6}>
            <Box sx={{
              position: "relative",
              width: "100%",
              height: "500px"
            }}>
              <Image src="/images/login.png" alt="login-img" layout='fill' objectFit='contain' />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="h4" mb={3}>Log In to Your Account</Typography>
            <LoginForm />
          </Grid>
        </Grid>
      </Paper>
    </RootStyle>
  )
}
