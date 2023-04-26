import { Paragrafo } from '../../components/Paragrafo'
import * as S from './styles'
import contato from '../../assets/images/svg contato 1.png'
import carrinho from '../../assets/images/Vector.png'
import selo from '../../assets/images/Group 61.png'
import telefone from '../../assets/images/svg contato 4.png'
import { TituloEspecial } from '../../styles'

const BlocoSeis = () => (
  <div className="container">
    <S.Bloco>
      <S.ContainerLegenda>
        <TituloEspecial>
          Suporte <strong>Strong Tech</strong>
        </TituloEspecial>
        <Paragrafo corParagrafo>
          Tire suas principais dúvidas com a nossa equipe
        </Paragrafo>
      </S.ContainerLegenda>
      <S.ContainerIconsSuporte>
        <li>
          <img src={contato} alt="" />
          <div>
            <S.TituloDosIcones>Nosso Suporte Personalizado</S.TituloDosIcones>
            <Paragrafo corParagrafo>
              Estamos prontos para tirar qualquer dúvida que você possa ter.
            </Paragrafo>
          </div>
        </li>
        <S.LinhaDeDivisao />
        <li>
          <img src={carrinho} alt="" />
          <div>
            <S.TituloDosIcones>Conheça nossa Loja Online</S.TituloDosIcones>
            <Paragrafo corParagrafo>
              Estamos prontos para tirar qualquer dúvida que você possa ter.
            </Paragrafo>
          </div>
        </li>
        <S.LinhaDeDivisao />
        <li>
          <img src={selo} alt="" />
          <div>
            <S.TituloDosIcones>Termos, Condições e Garantia</S.TituloDosIcones>
            <Paragrafo corParagrafo>
              Estamos prontos para tirar qualquer dúvida que você possa ter.
            </Paragrafo>
          </div>
        </li>
        <S.LinhaDeDivisao />
        <li>
          <img src={telefone} alt="" />
          <div>
            <S.TituloDosIcones>Entre em Contato</S.TituloDosIcones>
            <Paragrafo corParagrafo>
              Estamos prontos para tirar qualquer dúvida que você possa ter.
            </Paragrafo>
          </div>
        </li>
      </S.ContainerIconsSuporte>
    </S.Bloco>
  </div>
)

export default BlocoSeis
