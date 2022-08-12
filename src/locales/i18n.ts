import { createI18n } from 'vue-i18n'

import enGB from './en-GB.json'
import jaJP from './ja-JP.json'

type MessageSchema = typeof enGB

export default createI18n<MessageSchema, 'en-GB' | 'ja-JP'>({
  locale: window.navigator.language,
  legacy: false,
  fallbackLocale: 'en-GB',
  messages: {
    'en-GB': enGB,
    'ja-JP': jaJP,
  },
})
