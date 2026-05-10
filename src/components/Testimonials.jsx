import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Container, Avatar, IconButton } from "@mui/material";
import {
  ArrowBackIosNew  as ArrowBackIosNewIcon,
  ArrowForwardIos  as ArrowForwardIosIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from "@mui/icons-material";

// ─── Slots ────────────────────────────────────────────────────────────────────

const TestimonialsRoot = styled("section", {
  name: "FurniTestimonials",
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

const TestimonialsTitle = styled("h3", {
  name: "FurniTestimonials",
  slot: "title",
})(({ theme }) => ({
  ...theme.typography.h4,
  textAlign: "center",
  fontWeight: 900,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(6),
  fontSize: "1.8rem",
}));

const TestimonialsBody = styled("div", {
  name: "FurniTestimonials",
  slot: "body",
})(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  paddingLeft:  theme.spacing(8),
  paddingRight: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    paddingLeft:  theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const TestimonialsQuote = styled("p", {
  name: "FurniTestimonials",
  slot: "quote",
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  fontStyle: "italic",
  lineHeight: 1.9,
  marginBottom: theme.spacing(4),
  fontSize: "0.95rem",
}));

const TestimonialsName = styled("p", {
  name: "FurniTestimonials",
  slot: "name",
})(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 800,
  color: theme.palette.text.primary,
  fontSize: "0.95rem",
}));

const TestimonialsRole = styled("span", {
  name: "FurniTestimonials",
  slot: "role",
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
}));

const TestimonialsArrowBtn = styled(IconButton, {
  name: "FurniTestimonials",
  slot: "arrowBtn",
})(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  width: 38,
  height: 38,
  color: theme.palette.text.primary,
  "&:hover": { opacity: 0.8 },
}));

// ─── Component ────────────────────────────────────────────────────────────────

const Testimonials = React.forwardRef(function Testimonials(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniTestimonials" });
  const { ...other } = props;

  return (
    <TestimonialsRoot ref={ref} {...other}>
      <Container maxWidth="md">
        <TestimonialsTitle>Testimonials</TestimonialsTitle>

        <TestimonialsBody>
          <TestimonialsArrowBtn
            sx={{ position: "absolute", left: { xs: -8, md: 0 }, top: "35%", transform: "translateY(-50%)" }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
          </TestimonialsArrowBtn>

          <TestimonialsQuote>
            "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Integer convallis volutpat dui quis scelerisque."
          </TestimonialsQuote>

          <Avatar
            src="/public/mohamed.jpeg"
            alt="Mohamed"
            sx={(theme) => ({
              width: 56, height: 56,
              mx: "auto", mb: 1.5,
              border: `3px solid ${theme.palette.custom.gold}`,
            })}
          />
          <TestimonialsName>Mohamed Abdel Karim Mohamed</TestimonialsName>
          <TestimonialsRole>CEO, Co-Founder, XYZ Inc.</TestimonialsRole>

          <div style={{ marginTop: 16 }}>
            <FiberManualRecordIcon sx={(theme) => ({ fontSize: 10, color: theme.palette.custom.gold })} />
          </div>

          <TestimonialsArrowBtn
            sx={{ position: "absolute", right: { xs: -8, md: 0 }, top: "35%", transform: "translateY(-50%)" }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </TestimonialsArrowBtn>
        </TestimonialsBody>
      </Container>
    </TestimonialsRoot>
  );
});

export default Testimonials;
