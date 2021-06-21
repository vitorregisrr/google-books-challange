import { useContext } from 'react'
import { UserContext } from 'contexts/user'
import { motion } from 'framer-motion'
import { UserType } from 'types/User'
import DiscoverCarousel from 'components/DiscoverCarousel'
import MainMenu from 'components/MainMenu'
import Search from 'components/Search'
import BookBanner from 'components/BookBanner'
import { Container, Header } from 'components/UI'
import VideoBanner from 'components/VideoBanner'

import * as S from './styles'
import * as animations from './animations'

const Home = () => {
  const { user }: UserType = useContext(UserContext)

  return (
    <motion.div {...animations.wrapper}>
      <Search />
      <S.HomeWrapper>
        <Container>
          <motion.div {...animations.text}>
            <S.HomeTitle>
              Hi, <span className="highlight">{user.fullName}</span>
              <img className="ico" src="/img/ico/hand.svg" alt="Waving hand" />
            </S.HomeTitle>
          </motion.div>
        </Container>

        <Header title="Discover new book" link={{ href: '/', label: 'More' }} />
        <DiscoverCarousel books={user.activiteData.discoverBooks} />

        <Header title="Currently Reading" link={{ href: '/', label: 'All' }} />
        <BookBanner id={user.activiteData.currentReading.id} />

        <Header
          title="Reviews of The Days"
          link={{ href: '/', label: 'All Video' }}
        />
        <VideoBanner
          imgUrl={`/img/video-thumbnail.png`}
          description={`Man holding "Dont make me think" book by Steve Kruger`}
          videoId={`vBzBgewl4ac`}
        />

        <MainMenu />
      </S.HomeWrapper>
    </motion.div>
  )
}

export default Home
