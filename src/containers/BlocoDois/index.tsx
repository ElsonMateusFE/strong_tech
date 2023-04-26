import { Paragrafo } from '../../components/Paragrafo'
import { TituloEspecial } from '../../styles'
import * as S from './styles'
import computadores from '../../assets/images/Rectangle 2.png'
import monitores from '../../assets/images/Rectangle 3.png'
import notebooks from '../../assets/images/Rectangle 4.png'
import { Bloco } from './styles'

const BlocoDois = () => (
  <Bloco>
    <TituloEspecial>
      Explore a <strong>Strong Tech</strong>
    </TituloEspecial>
    <div>
      <S.ContainerDeExplore>
        <li>
          <img src={computadores} alt="" />
          <S.ContainerDeLegenda>
            <S.TituloSecundario>Todos computadores Strong</S.TituloSecundario>
            <Paragrafo corParagrafo={false}>
              Experimente o melhor da tecnologia com nossos computadores
              avançados e confiáveis.
            </Paragrafo>
          </S.ContainerDeLegenda>
        </li>
        <li>
          <img src={monitores} alt="" />
          <S.ContainerDeLegenda>
            <S.TituloSecundario>Monitores Strong Tech:</S.TituloSecundario>
            <Paragrafo corParagrafo={false}>
              Aprecie a qualidade da imagem e a alta resolução em nossos
              monitores de última geração.
            </Paragrafo>
          </S.ContainerDeLegenda>
        </li>
        <li>
          <img src={notebooks} alt="" />
          <S.ContainerDeLegenda>
            <S.TituloSecundario>Notebooks Strong Tech</S.TituloSecundario>
            <Paragrafo corParagrafo={false}>
              Leve a tecnologia de ponta para onde você for com nossos notebooks
              leves e potentes.
            </Paragrafo>
          </S.ContainerDeLegenda>
        </li>
      </S.ContainerDeExplore>
    </div>
  </Bloco>
)

export default BlocoDois
