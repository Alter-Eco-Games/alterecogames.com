import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      accent: {
        200: 'hsl(220, 7%, 44%)',
        300: 'hsl(220, 7%, 49%)',
        400: 'hsl(220, 7%, 54%)',
        500: 'hsl(220, 7%, 59%)',
      },
      brand: {
        primary: 'hsl(181, 48%, 45%)',
        secondary: 'hsl(194, 39%, 62%)',
      },
      footer: {
        bg: 'hsl(0, 0%, 94%)',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto sans',
        serif: 'Oswald',
      },
    }),
  ],
})
