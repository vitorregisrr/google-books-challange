import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { GoogleBook } from 'types/GoogleBook'
import * as animations from './animations'
import { Container } from 'components/UI'

import * as S from './styles'
import Link from 'next/link'
import BookMenu from 'components/BookMenu'

export type BookTemplateProps = {
  book: GoogleBook
}

export default function BooksTemplate({ book }: BookTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <motion.div {...animations.wrapper}>
      <S.BookTemplateWrapper>
        <motion.div {...animations.header}>
          <S.BookTemplateHeader>
            <Container>
              <Link href="/">
                <a className="link">
                  <img src="/img/ico/arrow-left.svg" alt="Back to home" />
                </a>
              </Link>
              <motion.div {...animations.img}>
                <div className="img-wrapper">
                  <div className="bg-shapes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : '/img/book-thumbnail.png'
                    }
                  />
                </div>
              </motion.div>
            </Container>
          </S.BookTemplateHeader>
        </motion.div>

        <S.BookTemplateBody>
          <motion.div {...animations.desc}>
            <Container>
              <h1 className="title">
                <b>{book.volumeInfo.title}</b>
                {` : `} {book.volumeInfo.subtitle}
              </h1>
              <h2 className="author">
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(', ')
                  : null}
              </h2>

              <div className="desc">{book.volumeInfo.description}</div>
            </Container>
          </motion.div>
        </S.BookTemplateBody>

        <BookMenu bookLink={book.volumeInfo.infoLink} />
      </S.BookTemplateWrapper>
    </motion.div>
  )
}
