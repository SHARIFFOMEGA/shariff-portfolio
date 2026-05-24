import { Box } from '@mui/material';

// Designer-grade SVG mockups for each project type. Each mockup uses
// a unique illustration so the cards read as a curated portfolio
// rather than generic stock photos.

const GoCardMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="goCardBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0B1F3A" />
        <stop offset="100%" stopColor="#1E3A66" />
      </linearGradient>
      <linearGradient id="goCardFront" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={accent} />
        <stop offset="100%" stopColor="#E5C158" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#goCardBg)" />
    {/* Stars */}
    {[...Array(20)].map((_, i) => (
      <circle key={i} cx={(i * 53) % 400} cy={(i * 31) % 240} r="0.8" fill="white" opacity="0.4" />
    ))}
    {/* Back card */}
    <g transform="translate(80,60) rotate(-8)">
      <rect width="200" height="120" rx="14" fill="white" opacity="0.15" />
    </g>
    {/* Front card */}
    <g transform="translate(120,55) rotate(4)">
      <rect width="220" height="130" rx="14" fill="url(#goCardFront)" />
      <rect x="22" y="22" width="36" height="26" rx="4" fill="#0B1F3A" opacity="0.85" />
      <circle cx="178" cy="35" r="11" fill="#0B1F3A" opacity="0.4" />
      <circle cx="190" cy="35" r="11" fill="#0B1F3A" opacity="0.4" />
      <text x="22" y="92" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="14">
        KaCyber
      </text>
      <text x="22" y="108" fill="#0B1F3A" fontFamily="monospace" fontSize="11" opacity="0.7">
        •••• 4829 GO CARD
      </text>
    </g>
  </svg>
);

const TicketingMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="ticketBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E3F2FD" />
        <stop offset="100%" stopColor="#90CAF9" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#ticketBg)" />
    {/* Phone */}
    <g transform="translate(140,18)">
      <rect width="120" height="200" rx="18" fill="#0B1F3A" />
      <rect x="6" y="14" width="108" height="172" rx="10" fill="white" />
      {/* Status bar */}
      <rect x="14" y="22" width="14" height="3" rx="1.5" fill="#0B1F3A" opacity="0.7" />
      <rect x="92" y="22" width="14" height="3" rx="1.5" fill="#0B1F3A" opacity="0.7" />
      {/* Title */}
      <text x="14" y="46" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="9">My Ticket</text>
      {/* Ticket Card */}
      <rect x="14" y="54" width="92" height="86" rx="8" fill={accent} opacity="0.15" />
      <rect x="14" y="54" width="92" height="86" rx="8" fill="none" stroke={accent} strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="14" cy="97" r="3" fill="white" />
      <circle cx="106" cy="97" r="3" fill="white" />
      <text x="22" y="74" fill="#0B1F3A" fontFamily="Poppins" fontSize="6" opacity="0.55">FROM</text>
      <text x="22" y="84" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="9">Kampala</text>
      <text x="22" y="112" fill="#0B1F3A" fontFamily="Poppins" fontSize="6" opacity="0.55">TO</text>
      <text x="22" y="122" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="9">Entebbe</text>
      {/* QR */}
      <rect x="30" y="148" width="60" height="32" rx="4" fill="#0B1F3A" opacity="0.85" />
      {[...Array(12)].map((_, i) => (
        <rect key={i} x={32 + (i % 6) * 9} y={150 + Math.floor(i / 6) * 14} width="6" height="11" fill="white" opacity="0.85" />
      ))}
    </g>
    {/* Floating tags */}
    <g transform="translate(20,40)">
      <rect width="90" height="22" rx="11" fill="white" />
      <circle cx="14" cy="11" r="5" fill={accent} />
      <text x="26" y="15" fill="#0B1F3A" fontFamily="Inter" fontWeight="600" fontSize="9">Onboarding</text>
    </g>
    <g transform="translate(285,170)">
      <rect width="92" height="22" rx="11" fill="white" />
      <circle cx="14" cy="11" r="5" fill="#43A047" />
      <text x="26" y="15" fill="#0B1F3A" fontFamily="Inter" fontWeight="600" fontSize="9">Paid · Active</text>
    </g>
  </svg>
);

const UzaziMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="uzaziBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFEBEE" />
        <stop offset="100%" stopColor="#F8BBD0" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#uzaziBg)" />
    {/* Logo / brand mark */}
    <g transform="translate(40,80)">
      <circle cx="40" cy="40" r="36" fill={accent} />
      <path d="M22 50 Q40 22 58 50 Q40 62 22 50 Z" fill="white" />
      <circle cx="40" cy="36" r="4" fill="white" />
      <text x="-4" y="100" fill="#880E4F" fontFamily="Poppins" fontWeight="800" fontSize="18">UZAZI HUB</text>
      <text x="0" y="118" fill="#880E4F" fontFamily="Inter" fontSize="9" opacity="0.7">Mothers · Care · Community</text>
    </g>
    {/* Social card */}
    <g transform="translate(210,30)">
      <rect width="160" height="180" rx="14" fill="white" />
      <rect x="10" y="10" width="140" height="80" rx="8" fill={accent} opacity="0.25" />
      <circle cx="80" cy="50" r="22" fill={accent} opacity="0.7" />
      <path d="M62 56 Q80 36 98 56 Q80 64 62 56 Z" fill="white" />
      <rect x="10" y="100" width="100" height="8" rx="4" fill="#0B1F3A" opacity="0.85" />
      <rect x="10" y="114" width="120" height="5" rx="2.5" fill="#0B1F3A" opacity="0.4" />
      <rect x="10" y="124" width="80" height="5" rx="2.5" fill="#0B1F3A" opacity="0.4" />
      <rect x="10" y="148" width="48" height="20" rx="10" fill={accent} />
      <text x="20" y="161" fill="white" fontFamily="Inter" fontWeight="700" fontSize="8">Follow</text>
      <text x="68" y="161" fill="#0B1F3A" fontFamily="Inter" fontWeight="600" fontSize="8" opacity="0.6">2.4K likes</text>
    </g>
  </svg>
);

const MusadanMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="webBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E8F5E9" />
        <stop offset="100%" stopColor="#A5D6A7" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#webBg)" />
    {/* Browser */}
    <g transform="translate(30,28)">
      <rect width="340" height="190" rx="10" fill="white" />
      <rect width="340" height="22" rx="10" fill="#ECEFF1" />
      <circle cx="14" cy="11" r="4" fill="#FF6B6B" />
      <circle cx="26" cy="11" r="4" fill="#FFD93D" />
      <circle cx="38" cy="11" r="4" fill="#6BCB77" />
      <rect x="60" y="6" width="200" height="11" rx="5" fill="white" />
      <text x="68" y="14" fill="#0B1F3A" fontFamily="monospace" fontSize="7" opacity="0.6">musadan.com</text>
      {/* Hero */}
      <rect x="0" y="22" width="340" height="80" fill={accent} opacity="0.15" />
      <text x="16" y="50" fill="#0B1F3A" fontFamily="Poppins" fontWeight="800" fontSize="16">Build with us.</text>
      <text x="16" y="68" fill="#0B1F3A" fontFamily="Inter" fontSize="9" opacity="0.7">Digital products engineered in Kampala.</text>
      <rect x="16" y="78" width="60" height="16" rx="8" fill={accent} />
      <text x="32" y="89" fill="white" fontFamily="Inter" fontWeight="700" fontSize="8">Get started</text>
      {/* Cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${16 + i * 106},116)`}>
          <rect width="90" height="58" rx="6" fill="#F5F5F5" />
          <rect x="8" y="8" width="20" height="20" rx="4" fill={accent} opacity="0.6" />
          <rect x="8" y="34" width="64" height="5" rx="2.5" fill="#0B1F3A" opacity="0.7" />
          <rect x="8" y="44" width="44" height="4" rx="2" fill="#0B1F3A" opacity="0.35" />
        </g>
      ))}
    </g>
  </svg>
);

const SafariMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="safariBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF3E0" />
        <stop offset="100%" stopColor="#FFCC80" />
      </linearGradient>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFB74D" />
        <stop offset="100%" stopColor="#FF8A65" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#safariBg)" />
    {/* Ad post */}
    <g transform="translate(35,22)">
      <rect width="330" height="196" rx="12" fill="white" />
      {/* Image */}
      <rect x="10" y="10" width="310" height="110" rx="8" fill="url(#sky)" />
      <circle cx="290" cy="40" r="14" fill="#FFE082" />
      {/* Acacia silhouette */}
      <path d="M40 110 Q40 80 60 78 Q70 70 80 78 Q100 80 100 110 Z" fill="#5D4037" opacity="0.9" />
      <rect x="66" y="100" width="6" height="18" fill="#3E2723" />
      {/* Elephant */}
      <ellipse cx="160" cy="105" rx="34" ry="15" fill="#6D4C41" />
      <circle cx="190" cy="98" r="10" fill="#6D4C41" />
      <rect x="142" y="115" width="4" height="8" fill="#5D4037" />
      <rect x="152" y="115" width="4" height="8" fill="#5D4037" />
      <rect x="170" y="115" width="4" height="8" fill="#5D4037" />
      <rect x="180" y="115" width="4" height="8" fill="#5D4037" />
      <path d="M200 100 Q210 110 205 118" stroke="#5D4037" strokeWidth="3" fill="none" />
      {/* Caption */}
      <text x="20" y="146" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="13">Wild Uganda Awaits</text>
      <text x="20" y="160" fill="#0B1F3A" fontFamily="Inter" fontSize="9" opacity="0.6">3-day safari · From $480 · Likana Safaris</text>
      <rect x="20" y="170" width="64" height="18" rx="9" fill={accent} />
      <text x="35" y="182" fill="white" fontFamily="Inter" fontWeight="700" fontSize="8">Book now</text>
      <rect x="92" y="170" width="44" height="18" rx="9" fill="#F5F5F5" />
      <text x="103" y="182" fill="#0B1F3A" fontFamily="Inter" fontWeight="600" fontSize="8">Share</text>
    </g>
  </svg>
);

const PrimacyMockup = ({ accent }) => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="primacyBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F3E5F5" />
        <stop offset="100%" stopColor="#CE93D8" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#primacyBg)" />
    {/* Brand palette */}
    <g transform="translate(30,30)">
      <rect width="120" height="180" rx="10" fill="white" />
      <text x="14" y="26" fill="#0B1F3A" fontFamily="Poppins" fontWeight="700" fontSize="11">Brand Palette</text>
      <rect x="14" y="38" width="40" height="40" rx="6" fill={accent} />
      <rect x="64" y="38" width="40" height="40" rx="6" fill="#5E35B1" />
      <rect x="14" y="86" width="40" height="40" rx="6" fill="#0B1F3A" />
      <rect x="64" y="86" width="40" height="40" rx="6" fill="#F5F5F5" stroke="#0B1F3A" strokeOpacity="0.15" />
      <text x="14" y="148" fill="#0B1F3A" fontFamily="Poppins" fontWeight="600" fontSize="9">Aa Poppins</text>
      <text x="14" y="164" fill="#0B1F3A" fontFamily="Inter" fontSize="8" opacity="0.7">The quick brown fox</text>
    </g>
    {/* Logo / mark */}
    <g transform="translate(170,40)">
      <rect width="200" height="160" rx="12" fill={accent} opacity="0.1" />
      <g transform="translate(40,38)">
        <circle cx="40" cy="40" r="36" fill={accent} />
        <path d="M28 30 L40 50 L52 30 Z" fill="white" />
        <circle cx="40" cy="40" r="8" fill={accent} />
        <text x="-12" y="100" fill="#0B1F3A" fontFamily="Poppins" fontWeight="800" fontSize="16" letterSpacing="2">PRIMACY</text>
        <text x="0" y="116" fill="#0B1F3A" fontFamily="Inter" fontSize="8" letterSpacing="3" opacity="0.7">ICT SOLUTIONS</text>
      </g>
    </g>
  </svg>
);

const MOCKUPS = {
  goCard: GoCardMockup,
  ticketing: TicketingMockup,
  uzazi: UzaziMockup,
  musadanWeb: MusadanMockup,
  safari: SafariMockup,
  primacy: PrimacyMockup,
};

const ProjectMockup = ({ projectKey, accent }) => {
  const Mock = MOCKUPS[projectKey] || GoCardMockup;
  return (
    <Box sx={{ width: '100%', height: 220, overflow: 'hidden', position: 'relative' }}>
      <Mock accent={accent} />
    </Box>
  );
};

export default ProjectMockup;
