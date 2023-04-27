import {
  ContainerBio,
  ContainerFooter,
  Contatos,
  Info,
  LinhaDeDivisao
} from './styles'
import facebook from '../../assets/images/face.png'
import instagram from '../../assets/images/Vector (1).png'
import whatsapp from '../../assets/images/Vector (2).png'
import logo from '../../assets/images/PROJETO LOGO STRONG BRANCO.png'

const FooterSuperior = () => (
  <ContainerFooter>
    <div className="container">
      <Info>
        <ul>
          <h4>Menu</h4>
          <li>Sobre Nós</li>
          <li>Onde Encontrar</li>
          <li>Produtos</li>
          <li>Suporte</li>
          <li>Contatos</li>
        </ul>
        <ul>
          <h4>Dúvidas</h4>
          <li>Termos e Condições</li>
          <li>Política de Privacidade</li>
          <li>Política de Qualidade</li>
          <li>Aviso Legais</li>
        </ul>
        <ul>
          <h4>Nós siga</h4>
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={whatsapp} alt="Whatsapp" />
        </ul>
        <ul>
          <h4>Fale Conosco</h4>
          <Contatos>Telefone:</Contatos>
          <Contatos>Email:</Contatos>
          <Contatos>Whatsapp:</Contatos>
        </ul>
        <ul>
          <h4>Localização</h4>
          <h5>Rua guarani</h5>
          <li>CNPJ: 14.580.995/0001-11</li>
          <li>Inscrição Estadual: 336.634.633.117</li>
          <li>Endereço: Rua Guarani, 722</li>
          <li>Guarulhos, SP - 07074-010</li>
        </ul>
      </Info>
      <LinhaDeDivisao />
      <aside>
        <div>
          <img src={logo} alt="" />
          <ContainerBio>
            <p>
              Strong Tech é uma empresa de tecnologia líder em seu segmento,
              oferecendo soluções tecnológicas inovadoras para o mercado. Com
              uma ampla gama de produtos, incluindo computadores, notebooks,
              monitores, PC´s all in one, PC´s Nuke e muito mais, a Strong Tech
              é reconhecida por sua qualidade e desempenho superior.
            </p>
          </ContainerBio>
        </div>
      </aside>
    </div>
  </ContainerFooter>
)

export default FooterSuperior
