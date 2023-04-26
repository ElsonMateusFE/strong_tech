import styled from 'styled-components'

export const Bloco = styled.section`
  height: 734px;

  @media (max-width: 768px) {
    height: 100%;
  }
`

export const Container = styled.div`
  flex-direction: row-reverse;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 286px;
  padding: 52px 0;

  @media (max-width: 768px) {
    display: block;
    padding: 32px 0;
  }

  main {
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
