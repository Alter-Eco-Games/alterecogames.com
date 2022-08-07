import { createI18n } from 'vue-i18n'

import en from './en.json'
import ja from './ja.json'

export default createI18n({
  locale: 'en', // changes the current locale shown on screen
  messages: {
    en,
    ja,
  },
})
