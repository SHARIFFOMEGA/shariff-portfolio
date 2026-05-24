import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

// SVG marks for the tools — drawn inline so nothing fetches from the network.
const FigmaMark = () => (
  <svg viewBox="0 0 40 60" width="36" height="44">
    <path d="M10 0h10v15H10a7.5 7.5 0 010-15z" fill="#F24E1E" />
    <path d="M20 0h10a7.5 7.5 0 010 15H20V0z" fill="#FF7262" />
    <path d="M20 15h10a7.5 7.5 0 010 15H20V15z" fill="#A259FF" />
    <path d="M10 15h10v15H10a7.5 7.5 0 010-15z" fill="#1ABCFE" />
    <path d="M10 30h10v15a7.5 7.5 0 11-10-7.5z" fill="#0ACF83" />
  </svg>
);
const PhotoshopMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <rect width="48" height="48" rx="8" fill="#001E36" />
    <text x="24" y="32" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="22" fill="#31A8FF">Ps</text>
  </svg>
);
const IllustratorMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <rect width="48" height="48" rx="8" fill="#330000" />
    <text x="24" y="32" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="22" fill="#FF9A00">Ai</text>
  </svg>
);
const XdMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <rect width="48" height="48" rx="8" fill="#2E001F" />
    <text x="24" y="32" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="20" fill="#FF61F6">Xd</text>
  </svg>
);
const CanvaMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <defs>
      <linearGradient id="canva" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="24" fill="url(#canva)" />
    <text x="24" y="33" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="22" fill="white">C</text>
  </svg>
);
const NotionMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <rect width="48" height="48" rx="8" fill="white" stroke="#E0E0E0" />
    <text x="24" y="33" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="22" fill="#0B1F3A">N</text>
  </svg>
);
const MetaMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <defs>
      <linearGradient id="meta" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0064E0" />
        <stop offset="100%" stopColor="#1877F2" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="8" fill="white" stroke="#E0E0E0" />
    <path d="M12 28c2-12 9-14 14-6 4-7 11-5 13 5 1 4-1 8-5 8-3 0-5-3-8-7-2 4-4 7-7 7-4 0-7-3-7-7z" fill="url(#meta)" />
  </svg>
);
const GoogleMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40">
    <rect width="48" height="48" rx="8" fill="white" stroke="#E0E0E0" />
    <path d="M34 24a10 10 0 11-3-7l3-3a14 14 0 100 20l-3-3a10 10 0 003-7z" fill="#4285F4" />
    <path d="M34 24h-10v4h6a6 6 0 01-6 4v4a10 10 0 0010-12z" fill="#34A853" />
    <path d="M14 24a10 10 0 0110-10v-4a14 14 0 00-14 14h4z" fill="#FBBC05" />
    <path d="M24 14V10a14 14 0 00-10 4l3 3a10 10 0 017-3z" fill="#EA4335" />
  </svg>
);

const TOOLS = [
  { name: 'Figma', Mark: FigmaMark, level: 95 },
  { name: 'Adobe Photoshop', Mark: PhotoshopMark, level: 88 },
  { name: 'Adobe Illustrator', Mark: IllustratorMark, level: 82 },
  { name: 'Adobe XD', Mark: XdMark, level: 85 },
  { name: 'Canva', Mark: CanvaMark, level: 96 },
  { name: 'Notion', Mark: NotionMark, level: 90 },
  { name: 'Meta Business', Mark: MetaMark, level: 88 },
  { name: 'Google Analytics', Mark: GoogleMark, level: 80 },
];

const Tools = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box id="tools" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 }, backgroundColor: 'background.default' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 700 }}
        >
          {t('tools.eyebrow')}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1, mb: 5, color: 'text.primary' }}
        >
          {t('tools.title')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(8, 1fr)',
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {TOOLS.map(({ name, Mark, level }) => (
            <Box
              key={name}
              sx={{
                p: 2,
                borderRadius: 2.5,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                transition: 'all 220ms ease',
                cursor: 'default',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary.main',
                  boxShadow: '0 14px 28px -20px rgba(201,162,39,0.5)',
                },
              }}
              title={`${name} · ${level}%`}
            >
              <Mark />
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, color: 'text.primary', textAlign: 'center', lineHeight: 1.1 }}
              >
                {name}
              </Typography>
              <Box sx={{ width: '100%', mt: 0.5 }}>
                <Box
                  sx={{
                    height: 4,
                    width: '100%',
                    borderRadius: 2,
                    backgroundColor: theme.palette.mode === 'light' ? '#EEE' : '#1a2c44',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: `${level}%`,
                      background: 'linear-gradient(90deg, #C9A227, #E5C158)',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;
