import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle.jsx';
import BehanceIcon from './icons/BehanceIcon.jsx';
import WhatsAppIcon from './icons/WhatsAppIcon.jsx';
import { CONTACT } from '../data/portfolio.js';

const ContactRow = ({ icon: Icon, label, value, href }) => (
  <Box
    component={href ? 'a' : 'div'}
    href={href}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      p: 2,
      borderRadius: 2,
      transition: 'background 0.2s',
      cursor: href ? 'pointer' : 'default',
      '&:hover': href ? { background: 'rgba(242,107,44,0.08)' } : {},
    }}
  >
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #F26B2C 0%, #FF8A50 100%)',
        display: 'grid',
        placeItems: 'center',
        color: '#FFFFFF',
        flexShrink: 0,
      }}
    >
      <Icon />
    </Box>
    <Box>
      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
        {value}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [toast, setToast] = useState({ open: false, type: 'success', text: '' });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ open: true, type: 'error', text: t('contact.validation.required') });
      return;
    }
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\nReply-to: ${form.email}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setToast({ open: true, type: 'success', text: 'Opening your email app…' });
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <SectionTitle
          eyebrow="Contact"
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
            gap: { xs: 4, md: 5 },
          }}
        >
          {/* Left: contact details */}
          <Box>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: 'background.paper',
                mb: 3,
              }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                {t('contact.or')}
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                <ContactRow
                  icon={EmailIcon}
                  label={t('contact.emailLabel')}
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactRow
                  icon={PhoneIcon}
                  label={t('contact.phone')}
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phone}`}
                />
                <ContactRow
                  icon={PlaceIcon}
                  label={t('contact.location')}
                  value={CONTACT.location}
                />
                <ContactRow
                  icon={WhatsAppIcon}
                  label="WhatsApp"
                  value={CONTACT.phone}
                  href={CONTACT.whatsappUrl}
                />
                <ContactRow
                  icon={BehanceIcon}
                  label="Behance"
                  value="nahurirashariff"
                  href={CONTACT.socials.behance}
                />
              </Stack>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailIcon />}
              href={`mailto:${CONTACT.email}?subject=Hire%20Inquiry%20from%20Portfolio`}
            >
              {t('nav.hireMe')}
            </Button>
          </Box>

          {/* Right: form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: 'background.paper',
            }}
            noValidate
          >
            <Stack spacing={2.5}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                <TextField
                  required
                  name="name"
                  label={t('contact.name')}
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  required
                  type="email"
                  name="email"
                  label={t('contact.email')}
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
              <TextField
                name="subject"
                label={t('contact.subject')}
                value={form.subject}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                name="message"
                label={t('contact.message')}
                value={form.message}
                onChange={handleChange}
                multiline
                minRows={5}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ alignSelf: 'flex-start' }}
              >
                {t('contact.send')}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToast((s) => ({ ...s, open: false }))}
          severity={toast.type}
          variant="filled"
        >
          {toast.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
