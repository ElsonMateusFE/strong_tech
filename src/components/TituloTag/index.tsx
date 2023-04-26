import { TituloTag as EstiloTituloTag } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontWeight?: boolean
  corDeTitulo?: boolean
}

const TituloTag = ({ children, fontSize, fontWeight, corDeTitulo }: Props) => (
  <EstiloTituloTag
    fontSize={fontSize}
    fontWeight={fontWeight}
    corDeTitulo={corDeTitulo}
  >
    {children}
  </EstiloTituloTag>
)

export default TituloTag
