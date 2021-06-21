import Link from 'next/link'

import * as S from './styles'

const MainMenu = () => {
  type MenuItems = {
    ico: string
    label: string
    href: string
    isActive?: boolean
  }[]

  const menuItems: MenuItems = [
    {
      ico: '/img/ico/home.svg',
      label: 'Home',
      href: '/',
      isActive: true
    },
    {
      ico: '/img/ico/book.svg',
      label: 'Libraries',
      href: '/'
    },
    {
      ico: '/img/ico/person.svg',
      label: 'Profile',
      href: '/'
    }
  ]
  return (
    <S.MainMenuWrapper>
      <S.MainMenuContent>
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <S.MainMenuItem isActive={item.isActive || false}>
              <img src={item.ico} alt="Home" className="ico" />
              <span className="label">{item.label}</span>
            </S.MainMenuItem>
          </Link>
        ))}
      </S.MainMenuContent>
    </S.MainMenuWrapper>
  )
}

export default MainMenu
