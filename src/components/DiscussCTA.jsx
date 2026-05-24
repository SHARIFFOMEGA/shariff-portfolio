import { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { useTranslation } from 'react-i18next';
import { CONTACT } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';

const KEYWORDS = [
  'UX Design',
  'App Design',
  'Dashboard',
  'Wireframe',
  'User Research',
  'Brand Identity',
  'Product Strategy',
  'Figma Prototype',
];

const Sparkle = ({ size = 22 }) => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    sx={{ width: size, height: size, flexShrink: 0 }}
    aria-hidden
  >
    <path
      d="M12 2 L13.6 9.2 C13.85 10.3 14.7 11.15 15.8 11.4 L23 13 L15.8 14.6 C14.7 14.85 13.85 15.7 13.6 16.8 L12 24 L10.4 16.8 C10.15 15.7 9.3 14.85 8.2 14.6 L1 13 L8.2 11.4 C9.3 11.15 10.15 10.3 10.4 9.2 Z"
      fill={palette.ORANGE}
    />
  </Box>
);

const TiltedMarquee = () => (
  <Box
    sx={{
      mt: { xs: 6, md: 8 },
      mx: { xs: -3, md: -8 },
      position: 'relative',
      overflow: 'hidden',
      py: { xs: 4, md: 5 },
    }}
  >
    <Box
      sx={{
        transform: { xs: 'rotate(-4deg) scale(1.15)', md: 'rotate(-3deg) scale(1.1)' },
        backgroundColor: palette.ORANGE,
        py: { xs: 2, md: 2.5 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          whiteSpace: 'nowrap',
          animation: 'marquee 28s linear infinite',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((kw, idx) => (
          <Box
            key={idx}
            sx={{ display: 'flex', alignItems: 'center', gap: { xs: 4, md: 6 } }}
          >
            <Typography
              sx={{
                fontFamily: 'Lufga, Poppins, sans-serif',
                fontWeight: 700,
                color: 'white',
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                letterSpacing: '-0.3px',
              }}
            >
              {kw}
            </Typography>
            <Sparkle size={28} />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

const Stat = ({ icon, label }) => (
  <Stack direction="row" spacing={1.2} alignItems="center">
    <Box
      sx={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        backgroundColor: palette.NAVY,
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
    <Typography
      sx={{
        fontFamily: 'Lufga, Poppins, sans-serif',
        fontWeight: 600,
        color: 'text.primary',
        fontSize: { xs: '0.9rem', md: '1rem' },
      }}
    >
      {label}
    </Typography>
  </Stack>
);

const DiscussCTA = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const onSend = () => {
    const target = email.trim() ? `?reply-to=${encodeURIComponent(email)}` : '';
    window.location.href = `mailto:${CONTACT.email}?subject=Awesome%20Project%20Idea${target ? '&body=Reach me at: ' + email : ''}`;
  };

  return (
    <Box
      id="discuss"
      sx={{
        position: 'relative',
        pt: { xs: 8, md: 12 },
        pb: 0,
        px: { xs: 3, md: 8 },
        backgroundColor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', position: 'relative', textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Lufga, Poppins, sans-serif',
            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.4rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            color: 'text.primary',
            mb: { xs: 4, md: 5 },
          }}
        >
          {t('discuss.titleStart')}{' '}
          <Box component="span" sx={{ color: palette.ORANGE }}>
            {t('discuss.titleAccent')}
          </Box>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'background.paper',
            p: 1,
            pl: 1.5,
            borderRadius: 999,
            boxShadow: '0 14px 40px -18px rgba(0,0,0,0.18)',
            maxWidth: 560,
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: `${palette.ORANGE}1F`,
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <EmailOutlinedIcon sx={{ color: palette.ORANGE, fontSize: 22 }} />
          </Box>
          <TextField
            fullWidth
            placeholder={t('discuss.placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                px: 1.5,
                color: 'text.primary',
                fontFamily: 'Lufga, Poppins, sans-serif',
                fontSize: '0.95rem',
              },
            }}
          />
          <Button
            variant="contained"
            onClick={onSend}
            sx={{
              backgroundColor: palette.ORANGE,
              color: 'white',
              px: 4,
              py: 1.2,
              borderRadius: 999,
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': { backgroundColor: palette.ORANGE_DEEP, boxShadow: 'none' },
            }}
          >
            {t('discuss.send')}
          </Button>
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1.5, sm: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: { xs: 3, md: 4 } }}
        >
          <Stat icon={<StarRoundedIcon sx={{ fontSize: 16 }} />} label={t('discuss.badge1')} />
          <Stat
            icon={<WorkspacePremiumRoundedIcon sx={{ fontSize: 16 }} />}
            label={t('discuss.badge2')}
          />
          <Stat icon={<VerifiedRoundedIcon sx={{ fontSize: 16 }} />} label={t('discuss.badge3')} />
        </Stack>
      </Box>

      <TiltedMarquee />
    </Box>
  );
};

export default DiscussCTA;
