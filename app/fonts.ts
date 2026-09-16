import localFont from 'next/font/local';

export const calSans = localFont({
  src: [
    {
      path: '../public/fonts/CalSans/CalSansUI-UILight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/CalSans/CalSansUI-UIRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CalSans/CalSansUI-UIMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/CalSans/CalSansUI-UISemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/CalSans/CalSansUI-UIBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cal-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// Backward-compatible aliases
export const stackSans = calSans;
export const mtnBrighterSans = calSans;
export const titlingGothic = calSans;
