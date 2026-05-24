import { Box, Typography, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTranslation } from 'react-i18next';
import { palette } from '../theme/theme.js';
import { CONTACT } from '../data/portfolio.js';

// Inline SVG mockups — designed to read clearly inside translucent glass cards.
const UxMockup = () => (
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Phone with smart-home control panel */}
    <g transform="translate(28,12)">
      <rect width="92" height="176" rx="16" fill="#FAF6F0" />
      <text x="34" y="22" fontFamily="Poppins" fontWeight="700" fontSize="7" fill="#171717">Control Panel</text>
      <rect x="8" y="32" width="76" height="34" rx="8" fill="white" />
      <text x="14" y="44" fontFamily="Inter" fontSize="6" fill="#171717">Living Room</text>
      <text x="14" y="56" fontFamily="Poppins" fontWeight="700" fontSize="8" fill="#171717">19℃</text>
      <text x="50" y="56" fontFamily="Poppins" fontWeight="700" fontSize="8" fill="#171717">25℃</text>
      <rect x="8" y="72" width="76" height="48" rx="8" fill="white" />
      <text x="14" y="84" fontFamily="Poppins" fontWeight="700" fontSize="8" fill="#171717">29.5</text>
      <text x="40" y="84" fontFamily="Poppins" fontWeight="700" fontSize="8" fill="#171717">303</text>
      <path d="M14 100 Q26 92 34 102 T58 100 T80 96" stroke={palette.ORANGE} strokeWidth="1.5" fill="none" />
      <rect x="8" y="126" width="36" height="42" rx="6" fill="#F4E2C3" />
      <rect x="48" y="126" width="36" height="42" rx="6" fill="white" />
    </g>
    {/* Right phone (peeking) */}
    <g transform="translate(124,28)">
      <rect width="88" height="160" rx="14" fill="#FAF6F0" />
      <circle cx="44" cy="40" r="14" fill={palette.ORANGE} />
      <path d="M30 56 Q44 32 58 56 Q44 70 30 56 Z" fill="white" />
      <text x="20" y="86" fontFamily="Poppins" fontWeight="700" fontSize="7" fill="#171717">Light · 80%</text>
      <rect x="8" y="96" width="72" height="6" rx="3" fill="#EEE" />
      <rect x="8" y="96" width="50" height="6" rx="3" fill={palette.ORANGE} />
      <rect x="8" y="112" width="34" height="34" rx="6" fill="white" />
      <rect x="46" y="112" width="34" height="34" rx="6" fill="white" />
    </g>
  </svg>
);

const LogoMockup = () => (
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Brand mark exploration */}
    <rect x="20" y="20" width="92" height="92" rx="16" fill="#FAF6F0" />
    <g transform="translate(40,40)">
      <circle cx="26" cy="26" r="24" fill={palette.ORANGE} />
      <path d="M14 22 L26 38 L38 22 Z" fill="white" />
      <circle cx="26" cy="26" r="6" fill={palette.ORANGE} />
    </g>
    <rect x="120" y="20" width="100" height="92" rx="16" fill={palette.NAVY} />
    <text x="170" y="74" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="26" fill="#FAF6F0">
      SN
    </text>
    {/* Color palette */}
    <rect x="20" y="124" width="200" height="56" rx="12" fill="#FAF6F0" />
    {['#F26B2C', '#0B1F3A', '#FFE7C2', '#171717', '#FAF6F0'].map((c, i) => (
      <circle key={c} cx={50 + i * 36} cy={152} r="14" fill={c} stroke="rgba(0,0,0,0.08)" />
    ))}
    {/* Typography pill */}
    <rect x="20" y="186" width="60" height="10" rx="5" fill="#FAF6F0" opacity="0" />
  </svg>
);

const DashboardMockup = () => (
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <rect x="14" y="14" width="212" height="172" rx="14" fill="#FAF6F0" />
    {/* Sidebar */}
    <rect x="14" y="14" width="40" height="172" rx="14" fill={palette.NAVY} />
    <circle cx="34" cy="34" r="5" fill={palette.ORANGE} />
    {[60, 80, 100, 120, 140].map((y, i) => (
      <rect key={y} x="22" y={y} width="24" height="6" rx="3" fill="white" opacity={i === 0 ? '1' : '0.4'} />
    ))}
    {/* Header */}
    <text x="64" y="32" fontFamily="Poppins" fontWeight="800" fontSize="11" fill="#171717">Dashboard</text>
    <rect x="180" y="22" width="40" height="14" rx="7" fill={palette.ORANGE} />
    {/* Stat cards */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${64 + i * 56},46)`}>
        <rect width="50" height="48" rx="8" fill="white" />
        <rect x="6" y="8" width="14" height="4" rx="2" fill="#171717" opacity="0.4" />
        <text x="6" y="32" fontFamily="Poppins" fontWeight="800" fontSize="10" fill={palette.ORANGE}>
          {['4.2k', '187', '92%'][i]}
        </text>
        <rect x="6" y="38" width="20" height="3" rx="1.5" fill="#171717" opacity="0.3" />
      </g>
    ))}
    {/* Chart area */}
    <rect x="64" y="104" width="156" height="74" rx="8" fill="white" />
    <path
      d="M70 160 L86 142 L102 150 L118 128 L134 138 L150 118 L166 124 L182 110 L198 116 L214 102"
      stroke={palette.ORANGE}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M70 160 L86 142 L102 150 L118 128 L134 138 L150 118 L166 124 L182 110 L198 116 L214 102 L214 174 L70 174 Z"
      fill={palette.ORANGE}
      opacity="0.18"
    />
  </svg>
);

const MobileMockup = () => (
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* Three phones diagonal */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${30 + i * 60},${10 + i * 12}) rotate(${(i - 1) * 4} 40 90)`}>
        <rect width="80" height="170" rx="14" fill="#FAF6F0" />
        <rect x="6" y="12" width="68" height="46" rx="6" fill={palette.ORANGE} opacity={i === 1 ? '0.95' : '0.5'} />
        <circle cx="40" cy="30" r="9" fill="white" opacity="0.85" />
        <rect x="22" y="46" width="36" height="4" rx="2" fill="white" />
        <text x="6" y="74" fontFamily="Poppins" fontWeight="700" fontSize="7" fill="#171717">{['Discover', 'Burger', 'Cart'][i]}</text>
        <rect x="6" y="80" width="68" height="4" rx="2" fill="#171717" opacity="0.6" />
        {[90, 100, 110].map((y) => (
          <rect key={y} x="6" y={y} width="56" height="3" rx="1.5" fill="#171717" opacity="0.3" />
        ))}
        <rect x="6" y="122" width="68" height="22" rx="11" fill={palette.ORANGE} />
        <rect x="6" y="150" width="68" height="14" rx="7" fill="#171717" opacity="0.08" />
      </g>
    ))}
  </svg>
);

const SERVICES = [
  { key: 'ux', Mock: UxMockup, image: '/services/ui-ux.png' },
  { key: 'logo', Mock: LogoMockup, image: '/services/logo-design.jpg' },
  { key: 'dashboard', Mock: DashboardMockup, image: '/services/dashboard.png' },
  { key: 'mobile', Mock: MobileMockup, image: '/services/mobile-apps.png' },
];

const Services = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        backgroundColor: palette.INK,
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric blurred orange "petals" behind the cards (for the glass to filter) */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          right: '6%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.ORANGE} 0%, transparent 65%)`,
          filter: 'blur(60px)',
          opacity: 0.65,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-6%',
          left: '-4%',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.ORANGE_LIGHT} 0%, transparent 65%)`,
          filter: 'blur(70px)',
          opacity: 0.45,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '40%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.ORANGE_DEEP} 0%, transparent 60%)`,
          filter: 'blur(80px)',
          opacity: 0.3,
        }}
      />
      {/* Soft texture overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 6px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { md: 'flex-end' },
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
            }}
          >
            {t('services.titleStart')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('services.titleAccent')}
            </Box>
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 420, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}
          >
            {t('services.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {SERVICES.map(({ key, Mock, image }) => (
            <Box
              key={key}
              component="a"
              href={CONTACT.socials.behance}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t(`services.items.${key}.title`)} — view on Behance`}
              sx={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                cursor: 'pointer',
                // Liquid glass: translucent + blur + subtle gradient border
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow:
                  'inset 0 1px 0 0 rgba(255,255,255,0.25), 0 30px 60px -30px rgba(0,0,0,0.55)',
                transition: 'transform 280ms ease, border-color 280ms ease',
                p: 0,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '1px',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0))',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                },
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: 'rgba(255,255,255,0.32)',
                  '& .arrow-button': {
                    backgroundColor: palette.ORANGE,
                    color: 'white',
                  },
                },
              }}
            >
              {/* Header */}
              <Box sx={{ p: 3, pb: 1.5 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: '1.4rem' }}
                >
                  {t(`services.items.${key}.title`)}
                </Typography>
                <Box sx={{ height: 1, my: 2, background: 'rgba(255,255,255,0.18)' }} />
              </Box>

              {/* Mockup area */}
              <Box sx={{ position: 'relative', px: 1.5, pb: 3 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {image ? (
                    <Box
                      component="img"
                      src={image}
                      alt={t(`services.items.${key}.title`)}
                      loading="lazy"
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <Mock />
                  )}
                </Box>
                <Box
                  className="arrow-button"
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: palette.NAVY,
                    color: 'white',
                    display: 'grid',
                    placeItems: 'center',
                    transition: 'all 220ms ease',
                    boxShadow: '0 14px 28px -14px rgba(0,0,0,0.6)',
                  }}
                >
                  <ArrowOutwardIcon />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pagination dots (decorative, matches template) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 5 }}>
          {[0, 1, 2, 3].map((i) => (
            <Box
              key={i}
              sx={{
                width: i === 0 ? 28 : 10,
                height: 10,
                borderRadius: 5,
                background: i === 0 ? palette.ORANGE : 'rgba(255,255,255,0.22)',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
