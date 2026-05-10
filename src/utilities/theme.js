import { createTheme } from '@mui/material/styles';

const getColors = (d) => ({
  bg: d ? '#1e1e1e' : '#f0f0eb',
  paper: d ? '#2a2a2a' : '#fff',
  subtle: d ? '#2e2e2e' : '#f7f7f3',
  hero: d ? '#3d5a47' : '#e8e8e3',
  alt: d ? '#111' : '#1c1c1c',
  text: d ? '#fff' : '#1c1c1c',
  sub: d ? 'rgba(255,255,255,.55)' : '#777',
  dis: d ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.38)',
  div: d ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.1)',
});

const compSpecs = {
  FurniNavbar: ['root', 'toolbar', 'logo', 'links', 'link', 'iconBtn'],
  FurniHero: ['root', 'heading', 'subText', 'primaryBtn', 'outlineBtn', 'img'],
  FurniProducts: [
    'root',
    'heading',
    'exploreBtn',
    'card',
    'cardName',
    'cardPrice',
  ],
  FurniWhyChooseUs: [
    'root',
    'heading',
    'iconCircle',
    'featureTitle',
    'featureDesc',
  ],
  FurniModernDesign: ['root', 'heading', 'subText', 'bulletText', 'exploreBtn'],
  FurniBlog: ['root', 'title', 'excerpt', 'readMore'],
  FurniTestimonials: ['root', 'title', 'quote', 'name', 'arrowBtn'],
  FurniFooter: ['root', 'text'],
};

const components = Object.fromEntries(
  Object.entries(compSpecs).map(([name, slots]) => [
    name,
    { styleOverrides: Object.fromEntries(slots.map((s) => [s, {}])) },
  ]),
);

export const buildTheme = (isDark) => {
  const c = getColors(isDark);
  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      custom: { gold: '#e8b84b', goldHover: '#d4a63a', darkGreen: '#3d5a47' },
      background: {
        default: c.bg,
        paper: c.paper,
        subtle: c.subtle,
        hero: c.hero,
        alt: c.alt,
      },
      text: { primary: c.text, secondary: c.sub, disabled: c.dis },
      divider: c.div,
    },
    components,
  });
};
