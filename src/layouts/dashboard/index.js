import { useState } from "react";
// material
import { styled, useTheme } from "@mui/material/styles";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import DashboardRightSidebar from "./DashboardRightSidebar";


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 90;
const APP_BAR_DESKTOP = 130;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("sm")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle
        sx={{
          transition: theme.transitions.create("margin", {
            duration: theme.transitions.duration.complex,
          }),
          mb: 0,
          px: 2,
        }}
      >
        {children}
      </MainStyle>
      <DashboardRightSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

    </RootStyle>
  );
}
