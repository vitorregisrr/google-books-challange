import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 5;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 34px 0 17px;
`

export const HeaderTitle = styled.h3`
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--dark-3);
`

export const HeaderLink = styled.a`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 1.5rem;
  margin-top: 4px;
  font-weight: 500;
  color: var(--blue);
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #379bc6;
  }
`
