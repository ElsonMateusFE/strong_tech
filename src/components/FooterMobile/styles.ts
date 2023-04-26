import styled from 'styled-components'

export const ContainerFooter = styled.div`
  background-color: #141414;
  color: white;
  padding-bottom: 30px;

  aside {
    p {
      text-align: center;
      font-size: 14px;
    }
  }
`

export const RedesSociais = styled.div`
  display: flex;
  background-color: #1a1919;
  padding: 28px 0;
  margin-bottom: 30px;

  div {
    align-items: center;
    justify-content: space-between;
    display: flex;

    h4 {
      font-weight: 200;
    }
  }
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  font-family: Barlow;
  font-weight: 700;
  font-size: 14px;

  h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  li {
    line-height: 28px;
  }
`

export const LogoFooter = styled.img`
  height: 60px;
`

export const RedesFooter = styled.img`
  height: 18px;
  margin-left: 20px;
`

export const Contatos = styled.li`
  margin-bottom: 2em;
`

export const LinhaDeDivisao = styled.div`
  border-bottom: 1px solid white;
  margin: 30px auto;
`
