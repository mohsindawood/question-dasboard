import React from "react";
import PropTypes from "prop-types";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// material
import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Hidden, Typography, Popover, Divider, Button } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useRouter } from "next/router";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 180;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 60;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "0px 2px 4px -1px rgb(255 244 244 / 20%), 0px 4px 5px 0px rgb(255 255 255 / 14%), 0px 1px 10px 0px rgb(255 255 255 / 12%)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: "#212121",

  [theme.breakpoints.up("lg")]: {
    width: `100%`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    justifyContent: "space-between",
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 1),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const { pathname } = useRouter();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changePath = () => {
    router.push("/auth/login")
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <RootStyle
      sx={{
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <ToolbarStyle>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: "pointer" }}>
          <AppsIcon />
          <Typography variant="h6" fontFamily={"Josefin Sans"} sx={{ color: "#545454                                                                                                                            " }}>Que
            <Typography variant="h6" component="span" fontFamily={"Josefin Sans"} sx={{ color: "#9b9b9b" }}>Stion</Typography>
          </Typography>
        </Stack>
        <Box>
          {(pathname === "/read" || pathname === "/discourse" || pathname === "/auth/login") ? null :
            <IconButton aria-describedby={id} onClick={handleClick} sx={{ color: "#fff" }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
          }
        </Box>

      </ToolbarStyle>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          ".MuiPaper-root ": {
            bgcolor: "#212121",
            color: "#fff",
            borderRadius: "20px",
            p: 3,
            ".popup-btn": {
              justifyContent: "start",
              color: "common.white"
            },
          }
        }}
      >
        <Typography variant="subtitle1">Notifications</Typography>
        <Divider />
        <Button variant="text" className="popup-btn" fullWidth>Something</Button>
        <Button variant="text" className="popup-btn" fullWidth onClick={changePath}>Profile</Button>
      </Popover>
    </RootStyle>
  );
}
