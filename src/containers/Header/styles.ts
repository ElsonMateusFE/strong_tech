import styled from 'styled-components'

export const HeaderBar = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: #f4f4f4;

  div {
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 32px 0;

    @media (max-width: 768px) {
      padding: 5px 0;
      display: block;
    }

    img {
      display: block;

      @media (max-width: 768px) {
        margin: auto;
        height: 60px;
      }
    }
  }
`
