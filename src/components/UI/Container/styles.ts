import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  max-width: calc(100vw - 40px);
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
`
