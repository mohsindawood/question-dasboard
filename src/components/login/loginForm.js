import React from 'react'

import * as Yup from "yup";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useRouter } from "next/router";
// formik
import { useFormik, Form, FormikProvider } from "formik";
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Button,
  Divider,
  Typography
} from "@mui/material"
import { LoadingButton } from "@mui/lab";;
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function loginForm() {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "test@gmail.com",
      password: "test1234",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        toast.success("Login success")
        router.push("/library/book")
      }, 1000);
    },
  });
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const { errors, touched, values, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant='body1'>Email and Username</Typography>
            <TextField
              fullWidth
              autoComplete="username"
              color='common.white'
              type="email"
              variant="filled"
              placeholder="email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: {
                  color: "common.white"
                },
                svg: {
                  fill: "#fff"
                }
              }}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant='body1'>Password</Typography>
            <TextField
              fullWidth
              color='common.white'
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              variant="filled"
              sx={{
                input: {
                  color: "common.white"
                },
                svg: {
                  fill: "#fff"
                }
              }}
              placeholder="password"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <LockOpenIcon />

                      ) : (
                        <LockOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
                color="warning"
              />
            }
            label={"Remember me"}
          />

          <Link
            underline='none'
            variant="subtitle2"
            href="/auth/forget-password"
            color="primary"
          >
            Forgot Password
          </Link>
        </Stack>
        <Stack spacing={3}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="text"
            loading={loading}

            sx={{
              bgcolor: "#0000004d",
              borderRadius: 0,
              color: "common.white",
              boxShadow: "none"
            }}
          >
            login
          </LoadingButton>
          <Divider sx={{
            "&:before": {
              borderTop: "2px dashed #fff"
            },
            "&:after": {
              borderTop: "2px dashed #fff"
            },
          }}>Instant Login</Divider>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="error"
            sx={{
              bgcolor: "#c6282887",
              borderRadius: 0,
              boxShadow: "none"
            }}
            startIcon={
              <GoogleIcon />
            }
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="contained"
            sx={{
              bgcolor: "#004a979c",
              borderRadius: 0,
              boxShadow: "none"
            }}
            startIcon={
              <FacebookIcon />
            }
          >
            Continue with Facebook
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  )
}

