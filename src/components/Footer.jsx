import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  TextField,
  Divider,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import BehanceIcon from './icons/BehanceIcon.jsx';
import WhatsAppIcon from './icons/WhatsAppIcon.jsx';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { CONTACT, LOGO_SRC } from '../data/portfolio.js';
import { palette } from '../theme/theme.js';

const NAV_ITEMS = ['home', 'about', 'services', 'experience', 'projects', 'contact'];

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  const onSubscribe = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=Newsletter%20Subscribe&body=Please add ${encodeURIComponent(email)} to your list.`;
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: palette.INK,
        color: 'white',
        px: { xs: 3, md: 8 },
        pt: { xs: 6, md: 10 },
        pb: 3,
      }}
    >
      <Box sx={{ maxWidth: 1240, mx: 'auto' }}>
        {/* Top row: connect headline + Hire Me */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { md: 'center' },
            gap: 3,
            pb: 4,
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800 }}
          >
            {t('footer.connectStart')}{' '}
            <Box component="span" sx={{ color: palette.ORANGE }}>
              {t('footer.connectAccent')}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowOutwardIcon />}
            href={`mailto:${CONTACT.email}?subject=Hire%20Inquiry%20from%20Portfolio`}
          >
            {t('nav.hireMe')}
          </Button>
        </Box>

        {/* Bottom grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: '1.5fr 0.9fr 1.3fr 1.3fr',
            },
            gap: { xs: 4, md: 5 },
            py: 5,
          }}
        >
          {/* About */}
          <Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}
            >
              <Box
                component="img"
                src={LOGO_SRC}
                alt="Shariff Nahurira"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Shariff Nahurira
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mb: 2.5, maxWidth: 320 }}>
              {t('footer.about')}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href={CONTACT.socials.behance}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { backgroundColor: palette.ORANGE, borderColor: palette.ORANGE },
                }}
              >
                <BehanceIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={CONTACT.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { backgroundColor: palette.ORANGE, borderColor: palette.ORANGE },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={CONTACT.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { backgroundColor: palette.ORANGE, borderColor: palette.ORANGE },
                }}
              >
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { backgroundColor: palette.ORANGE, borderColor: palette.ORANGE },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { backgroundColor: '#25D366', borderColor: '#25D366' },
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography variant="overline" sx={{ color: palette.ORANGE, letterSpacing: 2 }}>
              {t('footer.navigation')}
            </Typography>
            <Stack spacing={1.2} sx={{ mt: 1.5 }}>
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item}
                  to={item === 'about' ? 'about' : item}
                  smooth
                  duration={500}
                  offset={-70}
                  style={{ cursor: 'pointer' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.75)',
                      cursor: 'pointer',
                      '&:hover': { color: palette.ORANGE },
                    }}
                  >
                    {t(`nav.${item}`)}
                  </Typography>
                </ScrollLink>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="overline" sx={{ color: palette.ORANGE, letterSpacing: 2 }}>
              {t('footer.contact')}
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 1.5 }}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <PhoneIcon sx={{ fontSize: 18, color: palette.ORANGE, mt: '2px' }} />
                <Typography
                  component="a"
                  href={`tel:${CONTACT.phone}`}
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.85)', '&:hover': { color: palette.ORANGE } }}
                >
                  {CONTACT.phone}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <EmailIcon sx={{ fontSize: 18, color: palette.ORANGE, mt: '2px' }} />
                <Typography
                  component="a"
                  href={`mailto:${CONTACT.email}`}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    whiteSpace: 'nowrap',
                    fontSize: '0.82rem',
                    '&:hover': { color: palette.ORANGE },
                  }}
                >
                  {CONTACT.email}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <PlaceIcon sx={{ fontSize: 18, color: palette.ORANGE, mt: '2px' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  {CONTACT.location}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography
              sx={{
                color: palette.ORANGE,
                fontWeight: 700,
                fontSize: '1.05rem',
                mb: 1.5,
              }}
            >
              {t('footer.subscribe')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                p: 0.6,
                pl: 2,
                borderRadius: 2,
                boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
              }}
            >
              <TextField
                placeholder={t('footer.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: palette.INK,
                    fontSize: '0.95rem',
                    '& ::placeholder': { color: 'rgba(0,0,0,0.55)', opacity: 1 },
                  },
                }}
              />
              <IconButton
                onClick={onSubscribe}
                aria-label="Subscribe"
                sx={{
                  backgroundColor: palette.ORANGE,
                  color: 'white',
                  borderRadius: 1.5,
                  width: 44,
                  height: 40,
                  ml: 1,
                  '&:hover': { backgroundColor: palette.ORANGE_DEEP },
                }}
              >
                <SendIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { sm: 'center' },
            gap: 1.5,
            pt: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)' }}>
            © {year} Shariff Nahurira. {t('footer.rights')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)' }}>
            {t('footer.terms')} | {t('footer.privacy')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
