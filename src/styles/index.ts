import styled, { createGlobalStyle } from 'styled-components'

export type Props = {
  textAlign?: boolean
}

export const cores = {
  verdeEscuro: '#323232'
}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1920px) {
      max-width: 1722px;
    }

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`

export const TituloEspecial = styled.h3<Props>`
  font-weight: 400;
  font-size: 45px;
  text-align: ${(props) => (props.textAlign ? '' : 'center')};
  margin-bottom: 22px;
`

export default EstiloGlobal
