import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #1a202c;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`