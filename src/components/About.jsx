import {
  Box,
  Typography,
  Chip,
  LinearProgress,
  Stack,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle.jsx';

const LANG_LEVELS = [
  { key: 'english', level: 95 },
  { key: 'rukiga', level: 90 },
  { key: 'luganda', level: 80 },
  { key: 'swahili', level: 60 },
];

const About = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const competencies = t('about.competencies', { returnObjects: true }) || [];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        background: (th) =>
          th.palette.mode === 'light'
            ? 'linear-gradient(180deg, rgba(247,247,245,1) 0%, rgba(255,255,255,1) 100%)'
            : 'linear-gradient(180deg, rgba(16,33,55,1) 0%, rgba(10,22,40,1) 100%)',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <SectionTitle
          eyebrow="Profile"
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Bio + Competencies */}
          <Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
              {t('about.bio1')}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              {t('about.bio2')}
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
              {t('about.competenciesTitle')}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.2,
              }}
            >
              {Array.isArray(competencies) &&
                competencies.map((c) => (
                  <Box
                    key={c}
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ color: 'primary.main', fontSize: 20, mt: '2px' }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {c}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Box>

          {/* Education + Languages */}
          <Box>
            {/* Education */}
            <Box
              sx={{
                p: 3.5,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: 'background.paper',
                mb: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <SchoolIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  {t('about.educationTitle')}
                </Typography>
              </Box>

              {['degree', 'diploma'].map((k, idx) => (
                <Box
                  key={k}
                  sx={{
                    pl: 2.5,
                    pb: idx === 0 ? 2.5 : 0,
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -7,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: theme.palette.primary.main,
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {t(`about.education.${k}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t(`about.education.${k}.school`)}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    {t(`about.education.${k}.year`)}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Languages */}
            <Box
              sx={{
                p: 3.5,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: 'background.paper',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <TranslateIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  {t('about.languagesTitle')}
                </Typography>
              </Box>

              <Stack spacing={2}>
                {LANG_LEVELS.map((l) => (
                  <Box key={l.key}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                        {t(`about.languages.${l.key}`)}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {l.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={l.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: theme.palette.mode === 'light' ? '#EEE' : '#1a2c44',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #C9A227, #E5C158)',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
