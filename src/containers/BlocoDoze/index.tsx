import { Paragrafo } from '../../components/Paragrafo'
import bloco1 from '../../assets/images/Rectangle 13.png'
import bloco2 from '../../assets/images/Rectangle 15.png'
import bloco3 from '../../assets/images/Rectangle 47.png'
import bloco4 from '../../assets/images/Rectangle 46.png'
import { TituloEspecial } from '../../styles'
import { Bloco } from './styles'

const BlocoDoze = () => (
  <Bloco>
    <div className="container">
      <TituloEspecial textAlign>
        Somos a <strong>Strong Tech</strong>
      </TituloEspecial>
      <ul>
        <li>
          <section>
            <h3>O que Fazemos</h3>
            <div>
              <img src={bloco1} alt="" />
              <main>
                <Paragrafo corParagrafo fontSize={14}>
                  A Strong Tech é uma empresa que produz e comercializa
                  computadores e periféricos de alta qualidade. São produtos
                  desenvolvidos com tecnologia de ponta e passam por rigorosos
                  testes para garantir a satisfação de nossos clientes. Além
                  disso, oferecemos suporte técnico especializado e estamos
                  sempre em busca de novas soluções para atender às necessidades
                  do mercado.
                </Paragrafo>
                <a href="#">Saiba mais</a>
              </main>
            </div>
          </section>
        </li>
        <li>
          <section>
            <h3>Cases de Sucesso</h3>
            <div>
              <img src={bloco2} alt="" />
              <main>
                <Paragrafo corParagrafo fontSize={14}>
                  Nossos clientes são a prova do nosso comprometimento com a
                  excelência. Confira nossos cases de sucesso e veja como a
                  Strong Tech tem transformado a tecnologia em resultados
                  concretos para seus clientes.
                </Paragrafo>
                <a href="#">Saiba mais</a>
              </main>
            </div>
          </section>
        </li>
        <li>
          <section>
            <h3>Onde Nós Encontrar</h3>
            <div>
              <img src={bloco3} alt="" />
              <main>
                <Paragrafo corParagrafo fontSize={14}>
                  Procurando por produtos Strong Tech? Você pode encontrá-los em
                  nossa loja virtual ou em uma de nossas revendedoras
                  autorizadas. Também estamos presentes nas principais
                  plataformas de vendas online. Entre em contato conosco para
                  mais informações.
                </Paragrafo>
                <a href="#">Saiba mais</a>
              </main>
            </div>
          </section>
        </li>
        <li>
          <section>
            <h3>Temos Certificação ISO 9001</h3>
            <div>
              <img src={bloco4} alt="" />
              <main>
                <Paragrafo corParagrafo fontSize={14}>
                  A Strong Tech é uma empresa que preza pela qualidade dos seus
                  produtos, por isso, buscamos constantemente a melhoria do
                  nosso processo de produção e atendimento. O certificação ISO
                  9001, atesta a nossa excelência em gestão da qualidade e o
                  compromisso com a satisfação dos nossos clientes. Conte
                  conosco para oferecer sempre o melhor em tecnologia com
                  garantia de qualidade certificada.
                </Paragrafo>
                <a href="#">Saiba mais</a>
              </main>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </Bloco>
)

export default BlocoDoze
