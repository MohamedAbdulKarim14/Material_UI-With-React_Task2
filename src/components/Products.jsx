import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Container, Grid, Button } from "@mui/material";

// ─── Slots ────────────────────────────────────────────────────────────────────

const ProductsRoot = styled("section", {
  name: "FurniProducts",
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

const ProductsHeading = styled("h3", {
  name: "FurniProducts",
  slot: "heading",
})(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 900,
  color: theme.palette.text.primary,
  lineHeight: 1.25,
  marginBottom: theme.spacing(2),
  fontSize: "1.7rem",
}));

const ProductsSubText = styled("p", {
  name: "FurniProducts",
  slot: "subText",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.75,
}));

const ProductsExploreBtn = styled(Button, {
  name: "FurniProducts",
  slot: "exploreBtn",
})(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.background.default,
  borderRadius: "30px",
  textTransform: "none",
  fontWeight: 600,
  padding: "8px 24px",
  fontSize: "0.85rem",
  "&:hover": { opacity: 0.85 },
}));

const ProductCard = styled("div", {
  name: "FurniProducts",
  slot: "card",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  overflow: "hidden",
  transition: "transform 0.25s, box-shadow 0.25s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 16px 40px rgba(0,0,0,0.4)"
        : "0 16px 40px rgba(0,0,0,0.1)",
  },
}));

const ProductCardImgBox = styled("div", {
  name: "FurniProducts",
  slot: "cardImgBox",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.subtle,
  padding: theme.spacing(2),
}));

const ProductCardImg = styled("img", {
  name: "FurniProducts",
  slot: "cardImg",
})(() => ({
  width: "100%",
  height: 200,
  objectFit: "cover",
  borderRadius: 8,
  display: "block",
}));

const ProductCardBody = styled("div", {
  name: "FurniProducts",
  slot: "cardBody",
})(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2, 2, 2),
}));

const ProductCardName = styled("p", {
  name: "FurniProducts",
  slot: "cardName",
})(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

const ProductCardPrice = styled("p", {
  name: "FurniProducts",
  slot: "cardPrice",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  { name: "Nordic Chair",      price: "$50.00", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
  { name: "Kruzo Aero Chair",  price: "$78.00", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
  { name: "Ergonomic Chair",   price: "$43.00", img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Products = React.forwardRef(function Products(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniProducts" });
  const { ...other } = props;

  return (
    <ProductsRoot ref={ref} {...other}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={3}>
            <ProductsHeading>Crafted with excellent material.</ProductsHeading>
            <ProductsSubText>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </ProductsSubText>
            <ProductsExploreBtn>Explore</ProductsExploreBtn>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {products.map((p) => (
                <Grid item xs={12} sm={4} key={p.name}>
                  <ProductCard>
                    <ProductCardImgBox>
                      <ProductCardImg src={p.img} alt={p.name} />
                    </ProductCardImgBox>
                    <ProductCardBody>
                      <ProductCardName>{p.name}</ProductCardName>
                      <ProductCardPrice>{p.price}</ProductCardPrice>
                    </ProductCardBody>
                  </ProductCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ProductsRoot>
  );
});

export default Products;
