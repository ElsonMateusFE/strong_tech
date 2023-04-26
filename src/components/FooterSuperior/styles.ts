import styled from 'styled-components'

export const ContainerFooter = styled.div`
  background-color: #141414;
  color: white;
  padding-top: 63px;

  aside {
    max-width: 70%;
    margin: auto;
    padding: 71px;

    @media (min-width: 1921px) {
      max-width: 60%;
    }

    div {
      display: flex;
      column-gap: 82px;

      img {
        margin: auto;
      }
    }
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    font-family: Barlow;
    font-weight: 700;

    h4 {
      line-height: 30px;
      font-size: 20px;
      margin-bottom: 1.2em;

      @media (min-width: 1921px) {
        font-size: 25px;
      }
    }

    h5 {
      font-size: 18px;
      line-height: 29px;
      margin-bottom: 25px;
    }

    li {
      font-size: 15px;
      cursor: pointer;
      line-height: 28px;

      @media (min-width: 1921px) {
        font-size: 17px;
        line-height: 28px;
      }
    }

    img {
      height: 44px;
      margin-right: 17px;
      cursor: pointer;
    }
  }
`

export const Contatos = styled.li`
  margin-bottom: 2em;
`

export const LinhaDeDivisao = styled.div`
  border-bottom: 1px solid white;
  margin: auto;
  margin-top: 89px;
`
export const ContainerBio = styled.div`
  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-align: justify;

    @media (min-width: 1921px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`
