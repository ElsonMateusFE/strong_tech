import Menu from '../../components/Menu'
import logo from '../../assets/images/PROJETO LOGO STRONG 1.png'
import { HeaderBar } from './styles'
import Icones from '../../components/Icones'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div className="container">
          <img src={logo} alt="" />
          <Menu />
        </div>
      </HeaderBar>
      <Icones />
    </>
  )
}

export default Header
