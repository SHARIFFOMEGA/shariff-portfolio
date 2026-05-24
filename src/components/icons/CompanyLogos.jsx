// Real company logos load from public/logos/<key>.png. The SVG marks below
// act as fallbacks if a file is missing.

import { useState } from 'react';

const wrap = (children, bg) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect width="40" height="40" rx="10" fill={bg} />
    {children}
  </svg>
);

const KaCyberMark = () =>
  wrap(
    <>
      <path d="M11 10 L11 30 M11 20 L22 10 M11 20 L22 30" stroke="white" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <circle cx="28" cy="20" r="3" fill="#C9A227" />
    </>,
    '#0B4FA0',
  );

const UzaziMark = () =>
  wrap(
    <>
      <path d="M20 12 C 14 12 11 17 14 22 L20 30 L26 22 C 29 17 26 12 20 12 Z" fill="white" />
      <circle cx="20" cy="19" r="3" fill="#E91E63" />
    </>,
    '#2B0B47',
  );

const MusadanMark = () =>
  wrap(
    <>
      <path d="M10 28 L10 12 L15 12 L20 22 L25 12 L30 12 L30 28" stroke="white" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </>,
    '#0F766E',
  );

const PrimacyMark = () =>
  wrap(
    <>
      <path d="M12 30 L12 12 L20 12 C 26 12 26 22 20 22 L12 22" stroke="white" strokeWidth="2.6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="28" cy="14" r="2.5" fill="#C084FC" />
    </>,
    '#1F3A8A',
  );

const LikanaMark = () =>
  wrap(
    <>
      <path d="M12 28 Q12 19 18 18 Q20 13 22 18 Q28 19 28 28 Z" fill="white" />
      <rect x="19" y="26" width="2" height="6" fill="white" />
      <circle cx="32" cy="11" r="2.5" fill="#FFC107" />
    </>,
    '#6BAF2D',
  );

const SumicMark = () =>
  wrap(
    <>
      <path d="M27 14 C 25 11 16 11 14 14 C 12 17 18 19 20 20 C 22 21 28 23 26 26 C 24 29 15 29 13 26" stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </>,
    '#0B1F3A',
  );

// Image + fallback wrapper. Renders a 48×48 rounded white tile with the
// real logo PNG inside; if the file is missing, the inline SVG mark is shown.
const LogoTile = ({ src, alt, Fallback }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.06)',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        boxShadow: '0 4px 12px -8px rgba(0,0,0,0.18)',
        padding: 4,
      }}
    >
      {failed ? (
        <Fallback />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      )}
    </div>
  );
};

export const KaCyberLogo = () => (
  <LogoTile src="/logos/kacyber.png" alt="KaCyber" Fallback={KaCyberMark} />
);
export const UzaziLogo = () => (
  <LogoTile src="/logos/uzazi.png" alt="Uzazi Hub" Fallback={UzaziMark} />
);
export const MusadanLogo = () => (
  <LogoTile src="/logos/musadan.png" alt="Musadan" Fallback={MusadanMark} />
);
export const PrimacyLogo = () => (
  <LogoTile src="/logos/primacy.png" alt="Primacy ICT Solutions" Fallback={PrimacyMark} />
);
export const LikanaLogo = () => (
  <LogoTile src="/logos/likana.png" alt="Likana Safaris Uganda" Fallback={LikanaMark} />
);
export const SumicLogo = () => (
  <LogoTile src="/logos/sumic.png" alt="Sumic IT Solutions" Fallback={SumicMark} />
);

export const KaCyberLogoSenior = KaCyberLogo;

export const COMPANY_LOGOS = {
  kacyber_senior: KaCyberLogo,
  kacyber_officer: KaCyberLogo,
  uzazi: UzaziLogo,
  musadan: MusadanLogo,
  primacy: PrimacyLogo,
  likana: LikanaLogo,
  sumic: SumicLogo,
};
