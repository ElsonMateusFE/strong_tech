import styled from 'styled-components'

type Props = {
  sidebar: string
}

export const Container = styled.div<Props>`
  background-color: #141414;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.4s;

  > svg {
    position: absolute;
    color: white;
    height: 30px;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 80px;
`

export const Redes = styled.section`
  margin-top: 10px;

  ul {
    display: flex;
  }
`

export const Opcao = styled.nav`
  a {
    display: block;
    border-top: 0.1px solid white;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    padding: 20px 20px;
  }
`
