import styled from 'styled-components'

export const MainMenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: 59px;
  width: 100%;
  z-index: 1500;

  .container {
    height: 100%;
  }
`

export const MainMenuContent = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 50px;
  max-width: 700px;
  margin: 0 auto;
`

type MainMenuItemProps = {
  isActive: boolean
}

export const MainMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* temporary disabling */
  &:not(:first-child) {
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.04);

    .label {
      color: #000;
    }

    .ico {
      fill: #000;
    }
  }

  .ico {
    margin-bottom: 7px;
  }

  .label {
    font-size: 10px;
    transition: color 0.3s;

    ${(props: MainMenuItemProps) => `
     color: ${props.isActive ? '#000' : '#bfbebf'};
    `}
  }
`
