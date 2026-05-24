import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useColorMode } from '../context/ColorModeContext.jsx';
import { CONTACT, LOGO_SRC } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';

const NAV_ITEMS = ['home', 'about', 'services', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langAnchor, setLangAnchor] = useState(null);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_ITEMS;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangAnchor(null);
  };

  const navLinks = (
    <Box
      sx={{
        display: 'flex',
        gap: 0.5,
        alignItems: 'center',
        background: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
        p: 0.5,
        borderRadius: 999,
      }}
    >
      {NAV_ITEMS.map((item) => (
        <ScrollLink
          key={item}
          to={item}
          smooth
          duration={500}
          offset={-70}
          style={{ cursor: 'pointer' }}
        >
          <Button
            color="inherit"
            sx={{
              fontWeight: 500,
              px: 2,
              py: 0.8,
              borderRadius: 999,
              fontSize: '0.9rem',
              backgroundColor: active === item ? palette.ORANGE : 'transparent',
              color: active === item ? 'white' : 'inherit',
              '&:hover': {
                backgroundColor: active === item ? palette.ORANGE : 'rgba(0,0,0,0.06)',
              },
            }}
          >
            {t(`nav.${item}`)}
          </Button>
        </ScrollLink>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'saturate(180%) blur(14px)',
        background:
          theme.palette.mode === 'light'
            ? 'rgba(255,251,247,0.82)'
            : 'rgba(15,15,18,0.82)',
        color: 'text.primary',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 1 }}>
        <ScrollLink to="home" smooth duration={500} style={{ cursor: 'pointer' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              component="img"
              src={LOGO_SRC}
              alt="Shariff Nahurira"
              sx={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: `0 6px 14px -6px ${palette.ORANGE}88`,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                fontSize: '1rem',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              SHARIFF
            </Typography>
          </Box>
        </ScrollLink>

        {!isMobile && navLinks}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip title={t('language.label')}>
            <IconButton color="inherit" onClick={(e) => setLangAnchor(e.currentTarget)}>
              <LanguageIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {[
              ['en', t('language.en')],
              ['sw', t('language.sw')],
              ['de', t('language.de')],
            ].map(([code, label]) => (
              <MenuItem
                key={code}
                selected={i18n.language?.startsWith(code)}
                onClick={() => changeLang(code)}
              >
                <Box
                  component="span"
                  sx={{
                    width: 28,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: palette.ORANGE,
                    textTransform: 'uppercase',
                  }}
                >
                  {code}
                </Box>
                {label}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
            <IconButton color="inherit" onClick={toggleColorMode}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>

          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowOutwardIcon />}
            href={`mailto:${CONTACT.email}?subject=Project%20Inquiry`}
            sx={{ ml: 1, display: { xs: 'none', sm: 'inline-flex' } }}
          >
            {t('nav.hireMe')}
          </Button>

          {isMobile && (
            <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} role="presentation">
          <Typography variant="h6" sx={{ px: 3, pb: 1, color: palette.ORANGE, fontWeight: 700 }}>
            Menu
          </Typography>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item} disablePadding>
                <ScrollLink
                  to={item}
                  smooth
                  duration={500}
                  offset={-70}
                  style={{ width: '100%' }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemButton>
                    <ListItemText primary={t(`nav.${item}`)} />
                  </ListItemButton>
                </ScrollLink>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href={`mailto:${CONTACT.email}?subject=Project%20Inquiry`}
                sx={{ color: palette.ORANGE, fontWeight: 700 }}
              >
                <ListItemText primary={t('nav.hireMe')} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
