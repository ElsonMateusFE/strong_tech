import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.905);
  background-color: linear-gradiente(
    34deg,
    rgba(25, 88, 24, 0.95) 0%,
    rgba(17, 18, 17, 0.95) 95%
  );

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  nav {
    a {
      display: flex;
      font-size: 1.5rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: black;
      color: ${cores.verdeEscuro};
      text-decoration: none;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
`
