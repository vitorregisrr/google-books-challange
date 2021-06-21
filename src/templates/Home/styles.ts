import styled from 'styled-components'

export const HomeWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--background);
  padding-top: 130px;
`

export const HomeTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--dark-1);

  .highlight {
    color: var(--highlight);
    font-weight: bold;
  }

  .ico {
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
  }
`
