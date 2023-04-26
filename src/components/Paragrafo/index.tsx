import { Paragrafo as EstiloParagrafo } from './styles'

export type Props = {
  children: string
  corParagrafo: boolean
  textAlign?: boolean
  fontSize?: number
}

export const Paragrafo = ({
  children,
  corParagrafo,
  textAlign,
  fontSize
}: Props) => (
  <EstiloParagrafo
    corParagrafo={corParagrafo}
    textAlign={textAlign}
    fontSize={fontSize}
  >
    {children}
  </EstiloParagrafo>
)
