import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useTranslation } from 'react-i18next';
import { EXPERIENCE } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';
import { COMPANY_LOGOS } from './icons/CompanyLogos.jsx';

const Experience = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Liquid-glass card style — adapts to current theme mode.
  const glassCard = {
    position: 'relative',
    p: { xs: 2.5, md: 3.5 },
    borderRadius: '20px',
    backdropFilter: 'blur(22px) saturate(180%)',
    WebkitBackdropFilter: 'blur(22px) saturate(180%)',
    background: isLight
      ? 'linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.55) 100%)'
      : 'linear-gradient(135deg, rgba(40,40,48,0.72) 0%, rgba(28,28,34,0.55) 100%)',
    border: isLight
      ? '1px solid rgba(255,255,255,0.85)'
      : '1px solid rgba(255,255,255,0.10)',
    boxShadow: isLight
      ? '0 24px 48px -28px rgba(11,31,58,0.20), inset 0 1px 0 rgba(255,255,255,0.9)'
      : '0 24px 48px -28px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)',
    transition: 'transform 280ms ease, border-color 280ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: palette.ORANGE,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: '20px',
      padding: '1px',
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0))',
      WebkitMask:
        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
    },
  };

  const renderCard = (exp) => {
    const Logo = COMPANY_LOGOS[exp.key];
    return (
      <Box sx={glassCard}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, mb: 1 }}>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
            {Logo && (
              <Box sx={{ flexShrink: 0, mt: 0.2 }}>
                <Logo />
              </Box>
            )}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                  lineHeight: 1.2,
                }}
              >
                {t(`experience.roles.${exp.key}.title`)}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: palette.ORANGE,
                  fontWeight: 700,
                  mt: 0.3,
                }}
              >
                {t(`experience.roles.${exp.key}.company`)}
              </Typography>
            </Box>
          </Box>
          {exp.current && (
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${palette.ORANGE} 0%, ${palette.ORANGE_DEEP} 100%)`,
                color: 'white',
                fontSize: '0.72rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: `0 8px 18px -10px ${palette.ORANGE}88`,
              }}
            >
              {t('experience.present')}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mt: 1.5,
            mb: 2,
            color: 'text.secondary',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PlaceIcon sx={{ fontSize: 14, color: palette.ORANGE }} />
            <Typography variant="caption">
              {t(`experience.roles.${exp.key}.locationShort`,
                t(`experience.roles.${exp.key}.location`))}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <WorkOutlineIcon sx={{ fontSize: 14, color: palette.ORANGE }} />
            <Typography variant="caption">
              {t(`experience.roles.${exp.key}.period`)}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
          {t(`experience.roles.${exp.key}.description`)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      id="experience"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        background: isLight
          ? 'linear-gradient(180deg, #FFFBF7 0%, #FFF5EA 50%, #FFFBF7 100%)'
          : 'linear-gradient(180deg, #0F0F12 0%, #14141A 50%, #0F0F12 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric orange wash so the glass cards have something to filter */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.ORANGE}33 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.ORANGE_LIGHT}33 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: 1180, mx: 'auto', position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            {t('experience.titleStart')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('experience.titleAccent')}
            </Box>
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 2,
              width: 70,
              height: 4,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${palette.ORANGE} 0%, transparent 100%)`,
            }}
          />
        </Box>

        {/* Alternating L/R timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Center dashed line */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                background: isLight
                  ? `repeating-linear-gradient(180deg, ${palette.ORANGE}55 0 6px, transparent 6px 12px)`
                  : `repeating-linear-gradient(180deg, ${palette.ORANGE}88 0 6px, transparent 6px 12px)`,
              }}
            />
          )}

          {EXPERIENCE.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Box
                key={exp.key}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 80px 1fr' },
                  mb: { xs: 3, md: 4 },
                  alignItems: 'center',
                }}
              >
                {/* Left slot */}
                <Box
                  sx={{
                    gridColumn: { xs: '1', md: '1' },
                    visibility: { xs: 'visible', md: isLeft ? 'visible' : 'hidden' },
                  }}
                >
                  {isLeft || isMobile ? renderCard(exp) : null}
                </Box>

                {/* Center dot */}
                {!isMobile && (
                  <Box
                    sx={{
                      gridColumn: '2',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: 'background.default',
                        backgroundColor: 'background.default',
                        border: `3px solid ${palette.ORANGE}`,
                        boxShadow: `0 0 0 6px ${
                          isLight ? 'rgba(255,251,247,0.9)' : 'rgba(15,15,18,0.9)'
                        }, 0 0 16px ${palette.ORANGE}99`,
                        zIndex: 1,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 4,
                          borderRadius: '50%',
                          background: palette.ORANGE,
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Right slot */}
                <Box
                  sx={{
                    gridColumn: { xs: '1', md: '3' },
                    display: { xs: 'none', md: 'block' },
                    visibility: isLeft ? 'hidden' : 'visible',
                  }}
                >
                  {!isLeft ? renderCard(exp) : null}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
