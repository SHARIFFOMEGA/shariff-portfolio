import { useEffect, useState } from 'react';

// Sample image corners to decide whether it has a transparent background.
// If any corner pixel is fully transparent, treat the image as a cut-out.
const detectTransparency = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 12;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        // Check all 4 corner pixels
        const corners = [0, size - 1, size * (size - 1), size * size - 1];
        const transparent = corners.some((p) => data[p * 4 + 3] < 16);
        resolve(transparent);
      } catch {
        // Cross-origin block or canvas issue — assume opaque to be safe.
        resolve(false);
      }
    };
    img.onerror = () => resolve(false);
    img.src = url;
  });

// Tries each candidate path in order, returns the first that loads.
// `isTransparent` reflects the actual alpha of the resolved image, not its
// extension — so an opaque .png (untouched photo) is treated like a JPG.
export default function useProfilePhoto(candidates) {
  const [photo, setPhoto] = useState({
    src: '',
    isTransparent: false,
    isPlaceholder: true,
  });

  useEffect(() => {
    let cancelled = false;
    const tryNext = (idx) => {
      if (cancelled) return;
      if (idx >= candidates.length) {
        setPhoto({
          src: '',
          isTransparent: false,
          isPlaceholder: true,
        });
        return;
      }
      const url = candidates[idx];
      const img = new Image();
      img.onload = async () => {
        if (cancelled) return;
        const isTransparent = await detectTransparency(url);
        if (cancelled) return;
        setPhoto({ src: url, isTransparent, isPlaceholder: false });
      };
      img.onerror = () => tryNext(idx + 1);
      img.src = url;
    };
    tryNext(0);
    return () => {
      cancelled = true;
    };
  }, [candidates.join('|')]);

  return photo;
}
