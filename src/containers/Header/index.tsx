import Menu from '../../components/Menu'
import logo from '../../assets/images/PROJETO LOGO STRONG 1.png'
import logoMobile from '../../assets/images/PROJETO LOGO STRONG BRANCO.png'
import { HeaderBar } from './styles'
import Icones from '../../components/Icones'
import MenuMobile from '../../components/MenuMobile'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div className="container">
          <img src={logo} className="logo-desktop" alt="" />
          <img src={logoMobile} className="logo-mobile" alt="" />
          <MenuMobile />
          <Menu />
        </div>
      </HeaderBar>
      <Icones />
    </>
  )
}

export default Header
