import { createI18n } from 'vue-i18n'

import enGB from './en-GB.json'

type MessageSchema = typeof enGB

export default createI18n<MessageSchema, 'en-GB'>({
  locale: window.navigator.language,
  legacy: false,
  fallbackLocale: 'en-GB',
  messages: {
    'en-GB': enGB,
  },
})
