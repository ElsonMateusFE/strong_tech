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
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
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
  margin-top: 100px;

  section {
    margin-top: 30px;

    ul {
      display: flex;

      img {
        height: 30px;
      }
    }
  }
`

export const Opcao = styled.nav`
  a {
    display: block;
    border-top: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    padding: 14px 20px;
  }
`
