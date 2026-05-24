import { Box, Typography, Rating, useTheme } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from 'react-i18next';
import { palette } from '../theme/theme.js';

const TESTIMONIALS = [
  {
    key: 'hadijah',
    initials: 'KH',
    accent: '#C9A227',
  },
  {
    key: 'mariam',
    initials: 'KM',
    accent: '#1E88E5',
  },
];

const TestimonialCard = ({ initials, accent, contentKey }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: 'relative',
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #1F1F26 0%, #14141A 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <FormatQuoteIcon
        sx={{
          position: 'absolute',
          top: 18,
          right: 22,
          fontSize: 56,
          color: palette.ORANGE,
          opacity: 0.6,
          transform: 'scaleX(-1)',
        }}
      />
      <Rating value={5} readOnly size="small" sx={{ color: palette.ORANGE, mb: 1.5 }} />
      <Typography variant="caption" sx={{ color: palette.ORANGE, fontWeight: 700 }}>
        5.0
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'rgba(255,255,255,0.85)', my: 2.5, lineHeight: 1.8 }}
      >
        {t(`testimonials.items.${contentKey}.quote`)}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${accent} 0%, ${palette.ORANGE} 100%)`,
            display: 'grid',
            placeItems: 'center',
            fontWeight: 700,
            color: 'white',
          }}
        >
          {initials}
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
            {t(`testimonials.items.${contentKey}.name`)}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            {t(`testimonials.items.${contentKey}.role`)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      id="testimonials"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        backgroundColor: palette.INK,
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${palette.ORANGE}30 0%, transparent 60%)`,
          filter: 'blur(40px)',
        }}
      />
      <Box sx={{ maxWidth: 1100, mx: 'auto', position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 800,
            }}
          >
            {t('testimonials.titleStart')}
            <br />
            {t('testimonials.titleMiddle')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('testimonials.titleAccent')}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              mx: 'auto',
              mt: 2,
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            {t('testimonials.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {TESTIMONIALS.map((tst) => (
            <TestimonialCard
              key={tst.key}
              initials={tst.initials}
              accent={tst.accent}
              contentKey={tst.key}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
