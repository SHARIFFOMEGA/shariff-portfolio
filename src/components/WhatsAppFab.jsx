import { Box, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from './icons/WhatsAppIcon.jsx';
import { CONTACT } from '../data/portfolio.js';

const WHATSAPP_GREEN = '#25D366';

const WhatsAppFab = () => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t('whatsapp.tooltip')} placement="left" arrow>
      <Box
        component="a"
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 1300,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: WHATSAPP_GREEN,
          color: 'white',
          display: 'grid',
          placeItems: 'center',
          textDecoration: 'none',
          boxShadow: '0 16px 32px -10px rgba(37,211,102,0.65)',
          transition: 'transform 220ms ease, box-shadow 220ms ease',
          '&:hover': {
            transform: 'scale(1.08)',
            boxShadow: '0 18px 36px -10px rgba(37,211,102,0.85)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            border: `2px solid ${WHATSAPP_GREEN}`,
            opacity: 0.6,
            animation: 'pulse-ring 2s ease-out infinite',
          },
          '@keyframes pulse-ring': {
            '0%': { transform: 'scale(0.85)', opacity: 0.7 },
            '80%, 100%': { transform: 'scale(1.4)', opacity: 0 },
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Box>
    </Tooltip>
  );
};

export default WhatsAppFab;
