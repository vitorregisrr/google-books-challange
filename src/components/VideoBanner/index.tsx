import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Container } from 'components/UI/'
import { motion } from 'framer-motion'

const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false
})

import * as S from './styles'
import * as animations from './animations'

type VideoBannerProps = {
  imgUrl: string
  videoId: string
  description: string
}

const VideoBanner = ({ imgUrl, videoId, description }: VideoBannerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <ModalVideo
        //  @ts-ignore
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
      <motion.div {...animations.wrapper}>
        <S.VideoBannerWrapper>
          <Container>
            <S.VideoBannerPreview onClick={() => setIsOpen(true)}>
              <img src={imgUrl} alt={description} />
            </S.VideoBannerPreview>
          </Container>
        </S.VideoBannerWrapper>
      </motion.div>
    </>
  )
}

export default VideoBanner
