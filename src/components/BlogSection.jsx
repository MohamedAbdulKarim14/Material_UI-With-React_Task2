import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

// ─── Slots ────────────────────────────────────────────────────────────────────

const BlogRoot = styled("section", {
  name: "FurniBlog",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  paddingTop:    theme.spacing(7),
  paddingBottom: theme.spacing(7),
  [theme.breakpoints.down("md")]: {
    paddingTop:    theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const BlogItem = styled("div", {
  name: "FurniBlog",
  slot: "item",
})(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
}));

const BlogImg = styled("img", {
  name: "FurniBlog",
  slot: "img",
})(() => ({
  width: 72,
  height: 72,
  borderRadius: 8,
  objectFit: "cover",
  flexShrink: 0,
}));

const BlogTitle = styled("p", {
  name: "FurniBlog",
  slot: "title",
})(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

const BlogExcerpt = styled("span", {
  name: "FurniBlog",
  slot: "excerpt",
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  display: "block",
  marginBottom: theme.spacing(0.6),
}));

const BlogReadMore = styled("span", {
  name: "FurniBlog",
  slot: "readMore",
})(({ theme }) => ({
  ...theme.typography.caption,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.custom.gold
      : theme.palette.custom.darkGreen,
  fontWeight: 700,
  cursor: "pointer",
  "&:hover": { textDecoration: "underline" },
}));

// ─── Data ─────────────────────────────────────────────────────────────────────

const blogPosts = [
  { name: "Nordic Chair",     img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=120&q=80" },
  { name: "Kruzo Aero Chair", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=120&q=80" },
  { name: "Ergonomic Chair",  img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=120&q=80" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const BlogSection = React.forwardRef(function BlogSection(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "FurniBlog" });
  const { ...other } = props;

  return (
    <BlogRoot ref={ref} {...other}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={4} key={post.name}>
              <BlogItem>
                <BlogImg src={post.img} alt={post.name} />
                <div>
                  <BlogTitle>{post.name}</BlogTitle>
                  <BlogExcerpt>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                  </BlogExcerpt>
                  <BlogReadMore>Read More</BlogReadMore>
                </div>
              </BlogItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BlogRoot>
  );
});

export default BlogSection;
