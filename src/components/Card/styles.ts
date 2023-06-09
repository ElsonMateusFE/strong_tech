import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 290px;
  display: block;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  margin-top: 11px;
  padding-top: 34px;
  padding-left: 36px;
  padding-right: 36px;

  main {
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 290px;
    margin: 0 auto;
    height: 100%;
  }

  @media (min-width: 1920px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }

  img {
    height: 100%;

    @media (max-width: 360px) {
      width: 100%;
    }
  }

  a {
    position: absolute;
    text-decoration: none;
    color: #1241af;
    font-size: 18px;
    font-weight: 600;
    line-height: 53px;
    bottom: 0;

    @media (max-width: 768px) {
      margin-top: 1em;
      position: relative;
    }

    @media (min-width: 1920px) {
      font-size: 20px;
      margin-top: 11px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 36px;
  }

  div {
    display: flex;
    column-gap: 20px;
    row-gap: 10px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
