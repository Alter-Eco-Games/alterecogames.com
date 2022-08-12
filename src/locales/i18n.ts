import { createI18n } from 'vue-i18n'

import enGB from './en-GB.json'
import jaJP from './ja-JP.json'

type MessageSchema = typeof enGB

export default createI18n<MessageSchema, 'en-GB' | 'ja-JP'>({
  locale: 'en-GB', // changes the current locale shown on screen
  legacy: false,
  fallbackLocale: 'en-GB',
  messages: {
    'en-GB': enGB,
    'ja-JP': jaJP,
  },
})
