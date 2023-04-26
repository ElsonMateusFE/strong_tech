import styled from 'styled-components'

export const Bloco = styled.section`
  height: 609px;
  padding: 169px 0;

  @media (max-width: 768px) {
    height: 100%;
    padding: 45px 0;
  }
`

export const Container = styled.div`
  flex-direction: row-reverse;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 169px;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    margin: auto;

    ul {
      display: flex;
      gap: 29px;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  img {
    width: 100%;
  }
`
