import styled from 'styled-components'

export const HomeWrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--background);
  padding-top: 130px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 110px;
  }

  @supports (-webkit-touch-callout: none) {
    padding-bottom: 180px;
  }
`

export const HomeTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--dark-1);
  margin-bottom: -5.4px;

  .highlight {
    color: var(--highlight);
    font-weight: bold;
  }

  .ico {
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
  }
`
