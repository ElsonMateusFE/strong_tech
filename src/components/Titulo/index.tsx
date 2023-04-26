import { Titulo as EstiloTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontWeight?: boolean
  corDeTitulo?: boolean
}

const Titulo = ({ children, fontSize, fontWeight, corDeTitulo }: Props) => (
  <EstiloTitulo
    fontSize={fontSize}
    fontWeight={fontWeight}
    corDeTitulo={corDeTitulo}
  >
    {children}
  </EstiloTitulo>
)

export default Titulo
