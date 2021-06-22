import styled from 'styled-components'

export const BookMenuWrapper = styled.nav`
  position: fixed;
  bottom: 53px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 19px;
  width: 100%;
  max-width: 390px;
`

export const BookMenuContent = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  height: 59px;
  width: 100%;
  z-index: 1500;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  padding: 0 25px;

  a {
    text-decoration: none;
  }
`

export const BookMenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      right: -22px;
      height: 16px;
      width: 1px;
      background-color: rgba(151, 151, 151, 0.2);
    }
  }

  &:hover {
    transform: scale(1.04);
  }

  .ico {
    margin-right: 7px;
  }

  .label {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    font-weight: bold;
    text-decoration: none;
    color: #3f4043;
    transition: color 0.3s;
  }
`
