import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Container, Grid, Button } from "@mui/material";
import DotGrid from "./DotGrid";

// ─── Slots ────────────────────────────────────────────────────────────────────

const ModernRoot = styled("section", {
  name: "FurniModernDesign",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop:    theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    paddingTop:    theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
}));

const ModernImgGrid = styled("div", {
  name: "FurniModernDesign",
  slot: "imgGrid",
})(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginLeft: theme.spacing(2),
  marginTop:  theme.spacing(2),
  display: "grid",
  gridTemplateColumns: "55% 43%",
  gridTemplateRows: "220px 220px",
  gap: "12px",
}));

const ModernImg = styled("img", {
  name: "FurniModernDesign",
  slot: "img",
})(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
}));

const ModernImgBottom = styled("img", {
  name: "FurniModernDesign",
  slot: "imgBottom",
})(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
  marginTop: "-80px",
  position: "relative",
  zIndex: 2,
}));

const ModernHeading = styled("h3", {
  name: "FurniModernDesign",
  slot: "heading",
})(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 900,
  color: theme.palette.text.primary,
  lineHeight: 1.25,
  marginBottom: theme.spacing(2),
  fontSize: "1.7rem",
}));

const ModernSubText = styled("p", {
  name: "FurniModernDesign",
  slot: "subText",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
}));

const ModernBulletText = styled("span", {
  name: "FurniModernDesign",
  slot: "bulletText",
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  lineHeight: 1.65,
}));

const ModernExploreBtn = styled(Button, {
  name: "FurniModernDesign",
  slot: "exploreBtn",
})(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.background.default,
  borderRadius: "30px",
  textTransform: "none",
  fontWeight: 600,
  padding: "8px 28px",
  fontSize: "0.9rem",
  "&:hover": { opacity: 0.85 },
}));

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
];

// ─── Component ────────────────────────────────────────────────────────────────

const ModernDesign = React.forwardRef(function ModernDesign(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniModernDesign" });
  const { ...other } = props;

  return (
    <ModernRoot ref={ref} {...other}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -10, left: -10, zIndex: 0 }}>
                <DotGrid color="rgba(128,128,128,0.3)" rows={6} cols={6} />
              </div>
              <ModernImgGrid>
                <ModernImg
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80"
                  alt="Interior 1"
                />
                <ModernImg
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                  alt="Interior 2"
                />
                <div />
                <ModernImgBottom
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&q=80"
                  alt="Stool"
                />
              </ModernImgGrid>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <ModernHeading>We Help You Make Modern Interior Design</ModernHeading>
            <ModernSubText>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique.
            </ModernSubText>

            <Grid container spacing={1} sx={{ mb: 3 }}>
              {bullets.map((txt, i) => (
                <Grid item xs={6} key={i}>
                  <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 8, color: "#e8b84b", marginTop: 5, flexShrink: 0 }}>●</span>
                    <ModernBulletText>{txt}</ModernBulletText>
                  </div>
                </Grid>
              ))}
            </Grid>

            <ModernExploreBtn>Explore</ModernExploreBtn>
          </Grid>
        </Grid>
      </Container>
    </ModernRoot>
  );
});

export default ModernDesign;
