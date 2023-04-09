// material
import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Drawer, Divider, Toolbar, Hidden, ListItem, List, Typography, Box, Slider, Grid, IconButton, TextField } from "@mui/material";
import MuiInput from '@mui/material/Input';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Image from "next/image";
import SideBarList from "./sideBarList";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
const Input = styled(MuiInput)(({ theme }) => ({
  width: "42px",
  color: "#fff",
  "&:before": {
    borderBottom: "none"
  },
  "&:after": {
    borderBottom: "none"
  },
}))
const DRAWER_WIDTH = 260;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
    }),
  },
  ".first-list": {
    padding: 0
  },
  ".MuiListItem-root": {
    justifyContent: "space-between"
  },
  ".text-field": {
    textarea: {
      color: "#fff"
    },
    "&:before": {
      borderBottom: "none"
    },
    "&:after": {
      borderBottom: "none"
    },
  }
}));

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const [value, setValue] = React.useState(30);
  const { pathname } = useRouter();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <RootStyle
      sx={{
        width: {
          lg: DRAWER_WIDTH,
        },
      }}
    >
      <Drawer
        variant="permanent"
        anchor="right"
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: "#212121",
            color: "#fff",
            zIndex: 0,
            display: { md: "none", lg: "block" }
          },
        }}
      >
        <Toolbar />
        {(pathname === "/read" || pathname === "/discourse") ?
          <List>
            <ListItem className="first-list">
              <Box sx={{ width: "100%" }}>
                <Typography variant="body1" fontWeight={200} px={2} my={1}>Voice Actor</Typography>
                <Box sx={{
                  position: "relative",
                  width: "100%",
                  height: "289px"
                }}>
                  <Image src="/user.png" alt="voice actor" layout="fill" objectFit="cover" />
                </Box>
                <Grid container spacing={2} alignItems="center" px={2} pt={3}>
                  <Grid item>
                    <Typography variant="body2" fontWeight={300}>Volume</Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={typeof value === 'number' ? value : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"

                      sx={{
                        color: "common.white"
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      value={value}
                      size="small"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="body2" fontWeight={300}>Select Actor</Typography>
              <IconButton size="small" sx={{
                color: "#666666"
              }}><AddRoundedIcon /></IconButton>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="body2" fontWeight={300}>Select Viocw</Typography>
              <IconButton size="small" sx={{
                color: "#666666"
              }}><AddRoundedIcon /></IconButton>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="body2" fontWeight={300}>Place Holder</Typography>
              <IconButton size="small" sx={{
                color: "#666666"
              }}><AddRoundedIcon /></IconButton>
            </ListItem>
            <Divider />
            <ListItem>
              <Box className="text-field">
                <Typography variant="body2" fontWeight={300} my={1}>Text Well</Typography>
                <TextField
                  multiline
                  rows={14}
                  variant="filled"
                  placeholder="text"
                  defaultValue="ai code to tweak ingestion
                        {
                        	color: Blue;
	                        font-weight: 700;
  	                      font-size: 25px;
                       }" />
              </Box>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="body2" fontWeight={300}>Button</Typography>
              <IconButton size="small" sx={{
                color: "#666666"
              }}><SystemUpdateAltIcon /></IconButton>
            </ListItem>
          </List>
          :
          <SideBarList />
        }
      </Drawer>
    </RootStyle>
  );
}
