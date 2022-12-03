import MarkdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import { tablePlugin } from './table'

const markdown = MarkdownIt({
  breaks: true
})

export const mdPlugin = md => {
  md.use(tablePlugin)

  md.use(MarkdownItContainer, 'demo', {
    validate(params: string): boolean {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx: number) {
      if (tokens[idx].nesting === 1) {
        const m: RegExpMatchArray = tokens[idx].info
          .trim()
          .match(/^demo\s*(.*)$/)

        const description: string = m && m.length > 1 ? m[1] : ''

        const content: string =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''

        const title: string =
          tokens[idx + 2].type === 'fence' ? tokens[idx + 1].content : ''

        const source: string = md.utils.escapeHtml(content)

        return `<demo source="${source}">${encodeURIComponent(
          markdown.render(description)
        )}`
      }
      return '</demo>'
    }
  })
}
