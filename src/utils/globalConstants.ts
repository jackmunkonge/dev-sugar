import tailwindConfig from 'tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

export const { theme } = resolveConfig(tailwindConfig) as any;

export const CONTENT_HEIGHT = 'h-[calc(100vh_-_(4rem_+_2px_+_2rem))]'; // Full viewport height -navbar -navbarBorder -footer

export const TOTAL_LINKS = 26_344;
