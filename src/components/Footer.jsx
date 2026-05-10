import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";

// ─── Slots ────────────────────────────────────────────────────────────────────

const FooterRoot = styled("footer", {
  name: "FurniFooter",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.alt,
  paddingTop:    theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

const FooterText = styled("span", {
  name: "FurniFooter",
  slot: "text",
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.disabled,
  display: "block",
  textAlign: "center",
}));

// ─── Component ────────────────────────────────────────────────────────────────

const Footer = React.forwardRef(function Footer(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniFooter" });
  const { ...other } = props;

  return (
    <FooterRoot ref={ref} {...other}>
      <FooterText>
        © {new Date().getFullYear()} Furni. All rights reserved.
      </FooterText>
    </FooterRoot>
  );
});

export default Footer;
