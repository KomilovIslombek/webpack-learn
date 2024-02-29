import { getTitle } from './config/seo'

const title = getTitle()
document.title = title
console.log(title)
