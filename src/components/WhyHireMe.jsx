import { Box, Typography, Button, Stack, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import { useTranslation } from 'react-i18next';
import { CONTACT, WHY_HIRE_PHOTO_CANDIDATES, PLACEHOLDER_PHOTO } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';
import useProfilePhoto from '../hooks/useProfilePhoto.js';

const Stat = ({ value, label }) => (
  <Box>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        color: 'text.primary',
        fontSize: { xs: '2.2rem', md: '3rem' },
        lineHeight: 1,
        mb: 1,
      }}
    >
      {value}
    </Typography>
    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
      {label}
    </Typography>
  </Box>
);

const WhyHireMe = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { src: photoSrc, isTransparent } = useProfilePhoto(WHY_HIRE_PHOTO_CANDIDATES);

  return (
    <Box
      id="why-hire-me"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        backgroundColor: isLight ? '#F4F4F4' : '#16161B',
      }}
    >
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 14 },
          alignItems: 'center',
        }}
      >
        {/* LEFT: photo with peeking orange rounded square + hover-reveal rings */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'flex-end',
            minHeight: { xs: 360, md: 520 },
            ml: { md: -4 },
            '&:hover .why-hire-rings > *': {
              opacity: 1,
              transform: 'scale(1)',
            },
          }}
        >
          {/* Concentric rings — hidden by default, fade in on hover */}
          <Box
            className="why-hire-rings"
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  left: { xs: '50%', md: '40%' },
                  top: '50%',
                  width: { xs: 160 + i * 50, md: 220 + i * 65 },
                  height: { xs: 160 + i * 50, md: 220 + i * 65 },
                  marginLeft: { xs: `-${(160 + i * 50) / 2}px`, md: `-${(220 + i * 65) / 2}px` },
                  marginTop: { xs: `-${(160 + i * 50) / 2}px`, md: `-${(220 + i * 65) / 2}px` },
                  borderRadius: '50%',
                  border: `2px solid ${palette.ORANGE}`,
                  opacity: 0,
                  transform: 'scale(0.92)',
                  transition: `opacity 360ms ease ${i * 60}ms, transform 360ms ease ${i * 60}ms`,
                }}
              />
            ))}
          </Box>

          {/* Orange rounded square peeking from behind */}
          <Box
            sx={{
              position: 'absolute',
              width: { xs: 220, sm: 260, md: 320 },
              height: { xs: 280, sm: 320, md: 400 },
              borderRadius: '36px',
              background: palette.ORANGE_LIGHT,
              bottom: 0,
              left: { xs: '50%', md: '20%' },
              transform: { xs: 'translateX(-30%)', md: 'translateX(0)' },
              zIndex: 1,
            }}
          />

          {/* Photo (transparent PNG sits on top, head clears the orange shape) */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: 300, sm: 360, md: 460 },
              height: { xs: 360, sm: 440, md: 540 },
              zIndex: 2,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={photoSrc}
              alt="Shariff Nahurira"
              onError={(e) => {
                if (e.currentTarget.src !== PLACEHOLDER_PHOTO) {
                  e.currentTarget.src = PLACEHOLDER_PHOTO;
                }
              }}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: isTransparent ? 'contain' : 'cover',
                objectPosition: 'center bottom',
                borderRadius: isTransparent ? 0 : '36px',
                boxShadow: isTransparent
                  ? 'none'
                  : '0 30px 60px -20px rgba(0,0,0,0.25)',
              }}
            />
          </Box>
        </Box>

        {/* RIGHT: Headline + body + stats + outlined button */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 800,
              mb: 3,
              color: 'text.primary',
            }}
          >
            {t('whyHireMe.titleStart')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('whyHireMe.titleAccent')}
            </Box>
            ?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4, maxWidth: 460, fontSize: '1rem' }}
          >
            {t('whyHireMe.body')}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 4,
              mb: 4,
              maxWidth: 420,
            }}
          >
            <Stat value="40+" label={t('whyHireMe.stat1')} />
            <Stat value="7+" label={t('whyHireMe.stat2')} />
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="outlined"
              size="large"
              href={`mailto:${CONTACT.email}?subject=Hire%20Inquiry%20from%20Portfolio`}
              sx={{
                borderColor: 'text.primary',
                color: 'text.primary',
                borderWidth: 2,
                px: 5,
                py: 1.4,
                fontSize: '1rem',
                fontWeight: 700,
                '&:hover': {
                  borderColor: palette.ORANGE,
                  color: palette.ORANGE,
                  borderWidth: 2,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {t('nav.hireMe')}
            </Button>
            <Button
              variant="contained"
              size="large"
              href="/Shariff-Nahurira-Resume.pdf"
              download="Shariff-Nahurira-Resume.pdf"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: palette.ORANGE,
                color: 'white',
                px: 4,
                py: 1.4,
                fontSize: '1rem',
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: palette.ORANGE_DEEP,
                  boxShadow: 'none',
                },
              }}
            >
              {t('whyHireMe.downloadResume')}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyHireMe;
