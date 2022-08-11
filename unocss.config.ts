import {
  defineConfig,
  toEscapedSelector as e,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    [/^lsp-(.+)$/, ([, name], { rawSelector }) => {
      // remove tag end if there
      if (name.includes('>'))
        name = name.substring(0, name.length - 1)

      // discard mismatched rules
      if (/[a-zA-Z]+$/.test(name))
        return

      const selector = e(rawSelector)
      // return a string instead of an object
      return `
      ${selector} {
        letter-spacing: 0.${name}em;
      }`
    }],
  ],
  shortcuts: {
    'btn-primary': 'bg-brand-primary text-white py-2 px-4 rd-2 min-w-40 shadow-slate shadow-md',
    'btn-secondary': 'bg-brand-secondary text-white py-2 px-4 rd-2 min-w-40 shadow-slate shadow-md',
  },
  theme: {
    colors: {
      400: '#818792',
      footer: {
        bg: '#efefef',
        title: '#747A86',
        text: '#8F949E',
        b: '#BDBDBD',
        icons: '#D9D9D9',
      },
      nav: {
        bg: '#D9D9D9',
        popup: '#efefef',
        text: '#818792',
      },
      brand: {
        primary: '#31A5A7',
        secondary: '#78B2C4',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Sans',
        serif: 'Oswald',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left i-carbon-game-console i-carbon-home i-carbon-debug i-carbon-close i-carbon-menu'.split(' '),
})
