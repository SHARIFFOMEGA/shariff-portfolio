import { Box, Typography, Button, Rating, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { CONTACT, HERO_PHOTO_CANDIDATES } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';
import useProfilePhoto from '../hooks/useProfilePhoto.js';

const Squiggle = ({ sx }) => (
  <Box
    component="svg"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={sx}
  >
    <path
      d="M8 50 C 20 30, 30 30, 40 45"
      stroke={palette.ORANGE}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M48 14 L 60 4"
      stroke={palette.ORANGE}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M56 32 L 72 26"
      stroke={palette.ORANGE}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Box>
);

const Hero = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { src: photoSrc, isTransparent } = useProfilePhoto(HERO_PHOTO_CANDIDATES);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        pt: { xs: 11, md: 12 },
        pb: { xs: 8, md: 5 },
        px: { xs: 2, md: 6 },
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: 'auto',
          width: '100%',
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
        }}
      >
        {/* "Hello!" pill at top center */}
        <Box
          className="fade-up"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            px: 3,
            py: 1,
            borderRadius: 999,
            border: `1px solid ${isLight ? '#E5E5E5' : '#2A2A2F'}`,
            backgroundColor: isLight ? '#FFFFFF' : '#1A1A1F',
            mb: { xs: 2.5, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Lufga", "Poppins", sans-serif',
              fontWeight: 500,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: 'text.primary',
            }}
          >
            {t('hero.greeting')}
          </Typography>
        </Box>

        {/* Centered headline */}
        <Box className="fade-up" sx={{ position: 'relative', display: 'inline-block' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.4rem', lg: '5.2rem' },
              lineHeight: 1.02,
              color: 'text.primary',
              fontWeight: 800,
              letterSpacing: '-1.5px',
            }}
          >
            {t('hero.intro')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE, position: 'relative' }}>
              {t('hero.firstName')},
            </Box>
            <br />
            {t('hero.role')}
          </Typography>

          {/* Decorative squiggle next to name (top right area) */}
          <Squiggle
            sx={{
              position: 'absolute',
              top: { xs: -6, md: -10 },
              right: { xs: -30, md: -60 },
              width: { xs: 50, md: 80 },
              height: { xs: 36, md: 60 },
              display: { xs: 'none', sm: 'block' },
            }}
          />

          {/* Decorative squiggle near "Product" (bottom left area) */}
          <Squiggle
            sx={{
              position: 'absolute',
              bottom: { xs: -10, md: -20 },
              left: { xs: -30, md: -60 },
              width: { xs: 50, md: 80 },
              height: { xs: 36, md: 60 },
              transform: 'scaleX(-1)',
              display: { xs: 'none', sm: 'block' },
            }}
          />
        </Box>
      </Box>

      {/* Bottom row: quote | photo | rating
          Side text is vertically centered against the figure's torso */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 1400,
          mx: 'auto',
          mt: { xs: 2, md: -10 },
          flex: { md: 1 },
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
          gap: { xs: 4, md: 2 },
          alignItems: 'center',
        }}
      >
        {/* Left: quote / testimonial */}
        <Box
          className="fade-up"
          sx={{
            maxWidth: 260,
            justifySelf: { xs: 'center', md: 'start' },
            textAlign: 'left',
            order: { xs: 2, md: 1 },
            pl: { md: 2 },
          }}
        >
          <FormatQuoteIcon
            sx={{
              fontSize: 36,
              color: palette.NAVY,
              transform: 'scaleX(-1)',
              mb: 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              color: 'text.primary',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            {t('hero.tagline')}
          </Typography>
        </Box>

        {/* Center: photo with orange circle backdrop */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: { xs: 420, sm: 500, md: 560 },
            width: { xs: '100%', md: 540 },
            order: { xs: 1, md: 2 },
          }}
          className="fade-up"
        >
          {/* Orange circle backdrop */}
          <Box
            sx={{
              position: 'absolute',
              width: { xs: 320, sm: 400, md: 520 },
              height: { xs: 320, sm: 400, md: 520 },
              borderRadius: '50%',
              background: palette.ORANGE_LIGHT,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: 0.85,
            }}
          />

          {/* Photo — bottom aligned with the circle so the figure doesn't hang below */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: 320, sm: 400, md: 520 },
              height: { xs: 360, sm: 460, md: 600 },
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src={photoSrc}
              alt="Shariff Nahurira"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                borderRadius: isTransparent
                  ? 0
                  : '50% 50% 14px 14px / 40% 40% 14px 14px',
              }}
            />
          </Box>

          {/* Floating Portfolio / Hire me pill at the bottom of the circle */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 24, md: 40 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              p: 0.75,
              borderRadius: 999,
              backgroundColor: `${palette.ORANGE}33`,
              backdropFilter: 'blur(8px)',
              zIndex: 3,
            }}
          >
            <ScrollLink to="projects" smooth duration={500} offset={-70}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: palette.ORANGE,
                  color: '#FFFFFF',
                  px: { xs: 2.5, md: 3.5 },
                  py: 1.25,
                  borderRadius: 999,
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: palette.ORANGE_DEEP, boxShadow: 'none' },
                }}
                endIcon={<ArrowOutwardIcon />}
              >
                {t('hero.portfolio')}
              </Button>
            </ScrollLink>
            <Button
              href={`mailto:${CONTACT.email}?subject=Hire%20Inquiry%20from%20Portfolio`}
              sx={{
                color: 'text.primary',
                px: { xs: 2, md: 3 },
                py: 1.25,
                borderRadius: 999,
                fontWeight: 600,
                backgroundColor: 'transparent',
                '&:hover': { backgroundColor: 'transparent', color: palette.NAVY },
              }}
            >
              {t('hero.cta')}
            </Button>
          </Box>
        </Box>

        {/* Right: rating + years */}
        <Box
          className="fade-up"
          sx={{
            justifySelf: { xs: 'center', md: 'end' },
            textAlign: { xs: 'center', md: 'right' },
            order: { xs: 3, md: 3 },
            pr: { md: 2 },
          }}
        >
          <Rating
            value={5}
            readOnly
            size="medium"
            sx={{ color: palette.ORANGE, mb: 1.5 }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              lineHeight: 1,
              fontSize: { xs: '2rem', md: '2.6rem' },
            }}
          >
            5+ {t('hero.years')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mt: 0.5, fontSize: '0.95rem' }}
          >
            {t('hero.experience')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
