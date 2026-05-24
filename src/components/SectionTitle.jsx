import { Box, Typography } from '@mui/material';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => (
  <Box sx={{ textAlign: align, mb: { xs: 5, md: 7 } }}>
    {eyebrow && (
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          letterSpacing: 4,
          fontWeight: 700,
          display: 'block',
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      variant="h2"
      sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 1.5, color: 'text.primary' }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          maxWidth: 640,
          mx: align === 'center' ? 'auto' : 0,
        }}
      >
        {subtitle}
      </Typography>
    )}
    <Box
      sx={{
        height: 4,
        width: 60,
        background: 'linear-gradient(90deg, #C9A227, transparent)',
        borderRadius: 2,
        mt: 2,
        mx: align === 'center' ? 'auto' : 0,
      }}
    />
  </Box>
);

export default SectionTitle;
