function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createProjectImage(title, accent = '#6C63FF') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="24" /></filter>
      </defs>
      <rect width="800" height="600" rx="36" fill="url(#g)" />
      <circle cx="650" cy="120" r="140" fill="#00D4FF" opacity="0.18" filter="url(#blur)" />
      <circle cx="160" cy="470" r="150" fill="#ffffff" opacity="0.08" filter="url(#blur)" />
      <rect x="70" y="70" width="660" height="460" rx="28" fill="rgba(15, 23, 42, 0.42)" stroke="rgba(255,255,255,0.16)" />
      <path d="M130 420C200 300 305 264 410 292C495 315 562 384 680 258" stroke="#00D4FF" stroke-width="16" stroke-linecap="round" />
      <path d="M130 356C210 245 326 218 422 240C514 262 587 331 680 214" stroke="#6C63FF" stroke-width="12" stroke-linecap="round" opacity="0.88" />
      <text x="106" y="160" fill="#ffffff" font-family="Arial, sans-serif" font-size="46" font-weight="700">${title}</text>
      <text x="106" y="206" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="22">Futuristic agency showcase</text>
    </svg>
  `;

  return svgToDataUri(svg);
}

export function createAvatarImage(name, accent = '#00D4FF') {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6C63FF" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="60" fill="url(#g)" />
      <circle cx="100" cy="100" r="70" fill="rgba(255,255,255,0.08)" />
      <text x="100" y="118" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="700">${initials}</text>
    </svg>
  `;

  return svgToDataUri(svg);
}