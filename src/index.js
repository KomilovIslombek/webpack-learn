import styles from './styles/index.scss'

import { getTitle } from './config/seo'

const title = getTitle()
document.title = title
console.log(title)
console.log('styles', styles)
