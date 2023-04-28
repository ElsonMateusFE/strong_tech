import styled from 'styled-components'

export const Bloco = styled.section`
  padding: 76px 0;
`

export const Container = styled.div`
  flex-direction: row-reverse;
  display: flex;
  column-gap: 100px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 1920px) {
    column-gap: 169px;
    padding: 90px 0;
  }

  div {
    margin: auto;

    ul {
      display: flex;
      column-gap: 23px;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  img {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1920px) {
      width: 100%;
    }
  }
`
