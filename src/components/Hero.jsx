import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Container, Grid, Button } from '@mui/material';
import DotGrid from './DotGrid';

// ─── Slots ────────────────────────────────────────────────────────────────────

const HeroRoot = styled('section', {
  name: 'FurniHero',
  slot: 'root',
})(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const HeroDotWrapper = styled('div', {
  name: 'FurniHero',
  slot: 'dotWrapper',
})(({ theme }) => ({
  position: 'absolute',
  top: 24,
  right: 40,
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

const HeroHeading = styled('h2', {
  name: 'FurniHero',
  slot: 'heading',
})(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
  fontWeight: 900,
  lineHeight: 1.15,
  marginBottom: theme.spacing(2),
  fontSize: '2.6rem',
  [theme.breakpoints.down('md')]: { fontSize: '2rem' },
}));

const HeroSubText = styled('p', {
  name: 'FurniHero',
  slot: 'subText',
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  lineHeight: 1.75,
  maxWidth: 340,
}));

const HeroActions = styled('div', {
  name: 'FurniHero',
  slot: 'actions',
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const HeroPrimaryBtn = styled(Button, {
  name: 'FurniHero',
  slot: 'primaryBtn',
})(({ theme }) => ({
  backgroundColor: theme.palette.custom.gold,
  color: '#1c1c1c',
  fontWeight: 700,
  padding: '8px 24px',
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '0.9rem',
  '&:hover': { backgroundColor: '#d4a63a' },
}));

const HeroOutlineBtn = styled(Button, {
  name: 'FurniHero',
  slot: 'outlineBtn',
})(({ theme }) => ({
  border: `1.5px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  fontWeight: 600,
  padding: '8px 24px',
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(0,0,0,0.06)',
  },
}));

const HeroImg = styled('img', {
  name: 'FurniHero',
  slot: 'img',
})(() => ({
  width: '100%',
  maxWidth: 580,
  borderRadius: 8,
  objectFit: 'cover',
  display: 'block',
  margin: '0 auto',
}));

// ─── Component ────────────────────────────────────────────────────────────────

const Hero = React.forwardRef(function Hero(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'FurniHero' });
  const { ...other } = props;

  return (
    <HeroRoot ref={ref} {...other}>
      <HeroDotWrapper>
        <DotGrid color="rgba(255,255,255,0.35)" rows={5} cols={7} />
      </HeroDotWrapper>

      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={5}>
            <HeroHeading>
              Modern Interior
              <br />
              Design Studio
            </HeroHeading>

            <HeroSubText>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </HeroSubText>

            <HeroActions>
              <HeroPrimaryBtn>Shop Now</HeroPrimaryBtn>
              <HeroOutlineBtn>Explore</HeroOutlineBtn>
            </HeroActions>
          </Grid>

          <Grid item xs={12} md={7} sx={{ textAlign: 'center' }}>
            <HeroImg
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80"
              alt="Teal Sofa"
            />
          </Grid>
        </Grid>
      </Container>
    </HeroRoot>
  );
});

export default Hero;
