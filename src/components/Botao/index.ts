import styled from 'styled-components'

export const Botao = styled.button`
  background-color: #1241af;
  border: none;
  padding: 26px;
  font-weight: 700;
  color: #fff;
  width: 289px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  height: 70px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const BotaoSecundario = styled(Botao)`
  background: none;
  border: 2px solid #1241af;
  color: #1241af;
`
