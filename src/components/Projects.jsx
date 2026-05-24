import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTranslation } from 'react-i18next';
import ProjectMockup from './ProjectMockup.jsx';
import { PROJECTS, CONTACT } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';

const Projects = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PROJECTS[activeIdx];

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { md: 'flex-end' },
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            mb: 5,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            {t('projects.titleStart')}
            <br />
            {t('projects.titleMiddle')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('projects.titleAccent')}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowOutwardIcon />}
            href={CONTACT.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('projects.seeAll')}
          </Button>
        </Box>

        {/* Project carousel: two thumbnails side by side, then details below */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mb: 4,
          }}
        >
          {[PROJECTS[activeIdx], PROJECTS[(activeIdx + 1) % PROJECTS.length]].map(
            (p, idx) => (
              <Box
                key={`${p.key}-${idx}`}
                component={p.url ? 'a' : 'div'}
                href={p.url || undefined}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                aria-label={p.url ? `${t(`projects.items.${p.key}.title`)} — view on Behance` : undefined}
                sx={{
                  position: 'relative',
                  display: 'block',
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: p.background || 'background.paper',
                  height: { xs: 240, md: 380 },
                  border: `1px solid ${theme.palette.divider}`,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 220ms ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                {p.image ? (
                  <Box
                    component="img"
                    src={p.image}
                    alt={t(`projects.items.${p.key}.title`)}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Box sx={{ position: 'absolute', inset: 0 }}>
                    <ProjectMockup projectKey={p.key} accent={p.accent} />
                  </Box>
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#171717',
                    fontFamily: 'Lufga, Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                  }}
                >
                  {t(`projects.items.${p.key}.title`).split(' ')[0]}
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: palette.NAVY,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <ArrowOutwardIcon />
                </Box>
              </Box>
            ),
          )}
        </Box>

        {/* Tags */}
        <Stack
          direction="row"
          spacing={1.5}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          {['tag1', 'tag2', 'tag3'].map((tag) => (
            <Chip
              key={tag}
              label={t(`projects.items.${active.key}.${tag}`)}
              variant="outlined"
              sx={{
                borderColor: theme.palette.divider,
                color: 'text.primary',
                fontWeight: 500,
                px: 1.5,
                py: 2.5,
                fontSize: '0.9rem',
              }}
            />
          ))}
        </Stack>

        {/* Active project details */}
        <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1.5,
              fontSize: { xs: '1.4rem', md: '1.8rem' },
            }}
          >
            {t(`projects.items.${active.key}.title`)}{' '}
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                ml: 1,
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: palette.ORANGE,
                color: 'white',
                placeItems: 'center',
                fontSize: 14,
              }}
            >
              <ArrowOutwardIcon sx={{ fontSize: 18, m: 'auto' }} />
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {t(`projects.items.${active.key}.description`)}
          </Typography>
        </Box>

        {/* Pagination dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {PROJECTS.map((_, i) => (
            <Box
              key={i}
              onClick={() => setActiveIdx(i)}
              sx={{
                width: i === activeIdx ? 28 : 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: i === activeIdx ? palette.ORANGE : theme.palette.divider,
                cursor: 'pointer',
                transition: 'all 220ms ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
