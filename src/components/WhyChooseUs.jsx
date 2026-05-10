import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import {
  LocalShippingOutlined as LocalShippingOutlinedIcon,
  SupportAgentOutlined as SupportAgentOutlinedIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  Cached as CachedOutlinedIcon,
} from "@mui/icons-material";
import DotGrid from "./DotGrid";

// ─── Slots ────────────────────────────────────────────────────────────────────

const WhyRoot = styled("section", {
  name: "FurniWhyChooseUs",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  paddingTop:    theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    paddingTop:    theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
}));

const WhyHeading = styled("h3", {
  name: "FurniWhyChooseUs",
  slot: "heading",
})(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 900,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
  fontSize: "1.7rem",
}));

const WhySubText = styled("p", {
  name: "FurniWhyChooseUs",
  slot: "subText",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  lineHeight: 1.75,
  maxWidth: 420,
}));

const WhyIconCircle = styled("div", {
  name: "FurniWhyChooseUs",
  slot: "iconCircle",
})(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: "50%",
  backgroundColor: theme.palette.background.subtle,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(1.2),
  color: theme.palette.text.primary,
}));

const WhyFeatureTitle = styled("p", {
  name: "FurniWhyChooseUs",
  slot: "featureTitle",
})(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

const WhyFeatureDesc = styled("span", {
  name: "FurniWhyChooseUs",
  slot: "featureDesc",
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  lineHeight: 1.65,
  display: "block",
}));

const WhyImg = styled("img", {
  name: "FurniWhyChooseUs",
  slot: "img",
})(() => ({
  width: "100%",
  borderRadius: 12,
  objectFit: "cover",
  maxHeight: 460,
  display: "block",
}));

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  { Icon: LocalShippingOutlinedIcon, title: "Fast & Free Shipping",  desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
  { Icon: ShoppingBagOutlinedIcon,   title: "Easy to Shop",          desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
  { Icon: SupportAgentOutlinedIcon,  title: "24/7 Support",          desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
  { Icon: CachedOutlinedIcon,        title: "Hassle Free Returns",   desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const WhyChooseUs = React.forwardRef(function WhyChooseUs(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniWhyChooseUs" });
  const { ...other } = props;

  return (
    <WhyRoot ref={ref} {...other}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <DotGrid color="#e8b84b" rows={5} cols={9} />
            <WhyHeading>Why Choose Us</WhyHeading>
            <WhySubText>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </WhySubText>

            <Grid container spacing={3}>
              {features.map(({ Icon, title, desc }) => (
                <Grid item xs={12} sm={6} key={title}>
                  <WhyIconCircle>
                    <Icon sx={{ fontSize: 22 }} />
                  </WhyIconCircle>
                  <WhyFeatureTitle>{title}</WhyFeatureTitle>
                  <WhyFeatureDesc>{desc}</WhyFeatureDesc>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <WhyImg
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80"
              alt="Modern Room"
            />
          </Grid>
        </Grid>
      </Container>
    </WhyRoot>
  );
});

export default WhyChooseUs;
