// uno.config.ts
import {
    defineConfig,
    presetTypography,
    presetUno,
    presetWebFonts,
} from 'unocss';
import { presetRadix } from 'unocss-preset-radix';

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter',
                mono: 'Fira Code',
                hachimaru: 'Hachi Maru Pop',
            },
        }),
        presetRadix({
            palette: ['crimson', 'gray', 'mauve'],
        }),
        presetTypography(),
    ],
});
