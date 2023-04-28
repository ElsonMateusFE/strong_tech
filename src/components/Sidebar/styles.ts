import styled from 'styled-components'

type Props = {
  sidebar: string
}

export const Container = styled.div<Props>`
  background-color: white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.219);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.3s;

  > svg {
    position: absolute;
    color: rgba(0, 0, 0, 0.6);
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

export const Opcao = styled.nav`
  a {
    display: block;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    padding: 20px 20px;

    &:active {
      border-left: 5px solid red;
    }
  }
`
