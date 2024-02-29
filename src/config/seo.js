export const SITE_NAME = 'Webpack | Islombek'
export function getTitle(title) {
  return title ? `${title} - ${SITE_NAME}` : `Home - ${SITE_NAME}`
}
