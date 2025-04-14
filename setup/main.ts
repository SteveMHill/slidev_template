import { defineAppSetup } from '@slidev/types'
import StickyNote from '../components/StickyNote.vue'
import Admonition from '../components/Admonition.vue'
import AdmonitionType from '../components/AdmonitionType.vue'
import QuoteBlock from '../components/QuoteBlock.vue'

export default defineAppSetup(({ app }) => {
    app.component('StickyNote', StickyNote)
    app.component('Admonition', Admonition)
    app.component('AdmonitionType', AdmonitionType)
    app.component('QuoteBlock', QuoteBlock)
  })