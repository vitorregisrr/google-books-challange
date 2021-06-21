import { Container } from 'components/UI'
import Link from 'next/link'
import { motion } from 'framer-motion'

import * as animations from './animations'
import * as S from './styles'

type HeaderProps = {
  title: string
  link: {
    label: string
    href: string
  }
}
const Header = ({ title, link }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContent>
          <motion.div {...animations.text}>
            <S.HeaderTitle>{title}</S.HeaderTitle>
          </motion.div>
          <motion.div {...animations.text}>
            <Link href={link.href}>
              <S.HeaderLink>{link.label}</S.HeaderLink>
            </Link>
          </motion.div>
        </S.HeaderContent>
      </Container>
    </S.HeaderWrapper>
  )
}

export default Header
