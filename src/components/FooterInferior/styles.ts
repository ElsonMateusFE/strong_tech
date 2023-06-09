import styled from 'styled-components'

export const ContainerFooter = styled.div`
  background-color: #ff6b00;

  p {
    font-family: Barlow;
    color: #fefefe;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 25px 0;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (min-width: 1920px) {
      font-size: 20px;
    }
  }
`
