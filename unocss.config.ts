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
    [/^max-ch-(.+)$/, ([, name], { rawSelector }) => {
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
        max-width: ${name}ch;
      }`
    }],
  ],
  shortcuts: {
    'btn': 'text-white py-2 px-8 rd-2 min-w-40 shadow-slate shadow-md transition-transform',
    'content-input': 'b-1 b-stone b-rd text-3 py-1 indent-2 bg-transparent min-w-xs m-b-4',
  },
  theme: {
    colors: {
      200: '#686E78',
      300: '#747A86',
      400: '#818792',
      500: '#8F949E',
      600: '#9DA1AA',
      offWhite: '#efefef',
      test: '#CAE1E8',
      footer: {
        b: '#BDBDBD',
      },
      nav: {
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
