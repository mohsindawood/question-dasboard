// material
import { styled } from "@mui/material/styles";
import { Stack, Drawer, Divider, Toolbar, Hidden, Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// components
import Scrollbar from "../../components/scrollbar";
import NavSection from "../../components/navSection";
import Upload from "../../components/upload";
import sidebarConfig from "./config";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export default function DashboardRightSidebar({ isOpenSidebar, onCloseSidebar }) {
  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "common.white"
        },
      }}
    >
      <Toolbar />
      <NavSection
        navConfig={sidebarConfig}
        isShow={true}
        onClose={onCloseSidebar}
      />
      {/* <Box sx={{ height: "50vh" }}></Box> */}
      <Box sx={{
        position: "fixed",
        maxWidth: 260,
        width: "calc(100% - 24px)",
        bottom: "0%",
        bgcolor: "#212121",
      }}>
        <Typography variant="body2" px={2} mb={1}>Ingest</Typography>
        <Divider />
        <Upload />
        <Box sx={{
          p: 2,
          ".MuiInputBase-root": {
            color: "common.white",
            fieldset: {
              borderColor: "#666666",
              borderRadius: 0
            },
            svg: {
              fill: "#666666"
            }
          }
        }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>)
            }} />
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: DRAWER_WIDTH,
        },
      }}
    >
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH, bgcolor: "#212121",
            color: "#fff",
            zIndex: 0,
          },
        }}
      >
        {renderContent}
      </Drawer>
      <Drawer
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: "#212121",
            color: "#fff",
            zIndex: 0,
            display: { xs: "none", md: "block" }
          },
        }}
      >
        {renderContent}
      </Drawer>
      {/* </Box> */}
    </RootStyle>
  );
}
