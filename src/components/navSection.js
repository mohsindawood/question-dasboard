import PropTypes from "prop-types";
import React from "react";
import Image from 'next/image'
import NextLink from "next/link";
import { useState } from "react";
import {
  NavLink as RouterLink,
  matchPath,
  // useLocation,
} from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  ListItemButton,
  Divider
} from "@mui/material";
import { useRouter } from "next/router";
// ----------------------------------------------------------------------

const ListSubheaderStyle = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  color: theme.palette.text.primary,
}));

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.common.white,
  fontFamily: 'Josefin Sans',
  borderBottom: `1px solid ${theme.palette.divider}`
}));



const ListItemStyleImg = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: "auto",
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2.5),
  justifyContent: "center",
  color: theme.palette.common.white,
  fontFamily: 'Josefin Sans'
}));
// ----------------------------------------------------------------------

NavItem.propTypes = {
  isShow: PropTypes.bool,
  item: PropTypes.object,
};

function NavItem({ item, isShow, onClose, router, pathname }) {
  const theme = useTheme();
  const { title, path, icon, info, children } = item;
  const isActiveRoot = path
    ? !!matchPath({ path, end: false }, pathname)
    : false;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
    if (!children) {
      onClose();
    }
  };
  const activeRootStyle = {
    color: "#545454",
    fontWeight: "fontWeightMedium",
  };

  const activeSubStyle = {
    color: "#545454",
    fontWeight: "fontWeightMedium",
    svg: {
      transform: (theme) =>
        theme.direction === "rtl" ? "rotate(180deg)" : "rotate(90deg)",
    },
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >

          {isShow && (
            <>
              <ListItemText disableTypography primary={title} />
              {info && info}
              {open ? (
                <AddOutlinedIcon
                  sx={{
                    width: 16,
                    height: 16,
                    ml: 1,
                    transform: "rotate(90deg)",
                    color: "warning.main"
                  }}
                />
              ) : (
                <AddOutlinedIcon
                  sx={{
                    width: 16, height: 16, ml: 1, transform: (theme) =>
                      theme.direction === "rtl" ? "rotate(180deg)" : "rotate(0deg)",
                    color: "warning.main"
                  }}
                />
              )}
            </>
          )}
        </ListItemStyle>

        {isShow && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((item) => {
                const { title, path, img } = item;
                const isActiveSub = path
                  ? !!matchPath({ path, end: false }, pathname)
                  : false;

                return (
                  <ListItemStyleImg
                    component={NextLink}
                    key={title}
                    href={`${path}`}
                    passHref
                    sx={{
                      ...(isActiveSub && activeSubStyle),
                    }}
                  >
                    <Image
                      // className={styles.logo}
                      src={img}
                      alt="Next.js Logo"
                      width={100}
                      height={147}
                      priority
                    />
                  </ListItemStyleImg>
                );
              })}
            </List>
          </Collapse >
        )
        }
      </>
    );
  }

  return (
    <ListItemStyle
      onClick={() => onClose()}
      component={NextLink}
      key={title}
      href={`${path}`}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >

      {isShow && (
        <>
          <ListItemText disableTypography primary={title} />

          {info && info}
        </>
      )}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  isShow: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function NavSection({
  navConfig,
  onClose,
  isShow = true,
  ...other
}) {
  const { pathname } = useRouter();
  const router = useRouter();
  return (
    <Box {...other}>
      <List key={Math.random()} disablePadding>
        <ListSubheaderStyle />
        {navConfig.map((item) => (
          <React.Fragment key={item.title}>
            <NavItem item={item} isShow={isShow} onClose={onClose} router={router} pathname={pathname} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
