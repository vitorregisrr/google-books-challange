import { motion } from 'framer-motion'

import * as S from './styles'
import * as animations from './animations'

type BookMenuProps = {
  bookLink: string
}

const BookMenu = ({ bookLink }: BookMenuProps) => {
  type MenuItems = {
    ico: string
    label: string
    href: string
  }[]

  const menuItems: MenuItems = [
    {
      ico: '/img/ico/book-open.svg',
      label: 'Read',
      href: bookLink
    },
    {
      ico: '/img/ico/headphones.svg',
      label: 'Listen',
      href: bookLink
    },
    {
      ico: '/img/ico/share.svg',
      label: 'Share',
      href: bookLink
    }
  ]
  return (
    <S.BookMenuWrapper>
      <motion.div {...animations.wrapper}>
        <S.BookMenuContent>
          {menuItems.map((item, index) => (
            <S.BookMenuItem key={index}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <img src={item.ico} alt="Home" className="ico" />
                <span className="label">{item.label}</span>
              </a>
            </S.BookMenuItem>
          ))}
        </S.BookMenuContent>
      </motion.div>
    </S.BookMenuWrapper>
  )
}

export default BookMenu
