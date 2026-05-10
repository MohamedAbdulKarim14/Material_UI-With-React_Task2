import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Toolbar, Typography, Box, IconButton } from "@mui/material";
import {
  PersonOutlined as PersonOutlineIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  LightModeOutlined as LightModeIcon,
  DarkModeOutlined as DarkModeIcon,
} from "@mui/icons-material";
import { useAppTheme } from "../context/ThemeContext";

// ─── Slots ────────────────────────────────────────────────────────────────────

const NavbarRoot = styled("header", {
  name: "FurniNavbar",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const NavbarToolbar = styled(Toolbar, {
  name: "FurniNavbar",
  slot: "toolbar",
})(({ theme }) => ({
  paddingLeft:  theme.spacing(8),
  paddingRight: theme.spacing(8),
  minHeight: "60px !important",
  [theme.breakpoints.down("md")]: {
    paddingLeft:  theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const NavbarLogo = styled(Typography, {
  name: "FurniNavbar",
  slot: "logo",
})(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.4rem",
  color: theme.palette.text.primary,
  marginRight: "auto",
  "& span": { color: theme.palette.custom.gold },
}));

const NavbarLinks = styled(Box, {
  name: "FurniNavbar",
  slot: "links",
})(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3.5),
  marginRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: { display: "none" },
}));

const NavbarLink = styled(Typography, {
  name: "FurniNavbar",
  slot: "link",
})(({ theme, ownerState }) => ({
  color: theme.palette.text.primary,
  cursor: "pointer",
  fontSize: "0.85rem",
  paddingBottom: "2px",
  borderBottom: ownerState?.active
    ? `2px solid ${theme.palette.custom.gold}`
    : "none",
  "&:hover": { color: theme.palette.custom.gold },
}));

const NavbarIconBtn = styled(IconButton, {
  name: "FurniNavbar",
  slot: "iconBtn",
})(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(0.8),
}));

// ─── Component ────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "Shop", "About us", "Services", "Blog", "Contact us"];

const Navbar = React.forwardRef(function Navbar(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniNavbar" });
  const { ...other } = props;

  const { isDark, toggleTheme } = useAppTheme();

  return (
    <NavbarRoot ref={ref} {...other}>
      <NavbarToolbar>
        <NavbarLogo component="span">
          Furni<span>.</span>
        </NavbarLogo>

        <NavbarLinks>
          {NAV_LINKS.map((link, i) => {
            const ownerState = { active: i === 0 };
            return (
              <NavbarLink key={link} variant="body2" ownerState={ownerState}>
                {link}
              </NavbarLink>
            );
          })}
        </NavbarLinks>

        <NavbarIconBtn><PersonOutlineIcon fontSize="small" /></NavbarIconBtn>
        <NavbarIconBtn><ShoppingCartOutlinedIcon fontSize="small" /></NavbarIconBtn>
        <NavbarIconBtn onClick={toggleTheme} sx={{ ml: 0.5 }}>
          {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </NavbarIconBtn>
      </NavbarToolbar>
    </NavbarRoot>
  );
});

export default Navbar;
