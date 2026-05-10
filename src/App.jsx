import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "./context/ThemeContext";
// useTheme from MUI is used inside Box via sx bgcolor
// my component
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Products      from "./components/Products";
import WhyChooseUs   from "./components/WhyChooseUs";
import ModernDesign  from "./components/ModernDesign";
import BlogSection   from "./components/BlogSection";
import Testimonials  from "./components/Testimonials";
import Footer        from "./components/Footer";


export default function App() {
  return (
    <ThemeProvider>
    <Box>
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <ModernDesign />
      <BlogSection />
      <Testimonials />
      <Footer />
    </Box>
    </ThemeProvider>
  );
}