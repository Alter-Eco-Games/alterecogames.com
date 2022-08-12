export function useI18nTitle(i18nKey: string) {
  const { t } = useI18n()
  const i18nTitle = t(`${i18nKey}.title`)
  const title = useTitle(`Alter eco | ${i18nTitle}`)
  return {
    title,
    t,
  }
}
