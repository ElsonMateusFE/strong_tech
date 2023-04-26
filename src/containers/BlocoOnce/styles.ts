import styled from 'styled-components'

export const Bloco = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  padding: 136px 0;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 100%;
    margin-top: 20px;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    color: #1241af;
    text-align: center;
    margin-top: 39px;
  }
`

export const ImagemTeclado = styled.div`
  img {
    width: 100%;
    margin-top: 150px;
  }
`

export const LinhaVertical = styled.div`
  border-left: 1px solid #000000;
  height: 650px;
  margin: auto;

  @media (max-width: 768px) {
    border-bottom: 1px solid #000000;
    margin: 3em 0;
    height: 0;
  }
`
