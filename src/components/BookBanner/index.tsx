import { useState, useEffect } from 'react'
import { Container } from 'components/UI/'
import { getBookById } from 'services/google-books'
import { motion } from 'framer-motion'
import { GoogleBook } from 'types/GoogleBook'
import Link from 'next/link'

import * as animations from './animations'
import * as S from './styles'

type BookBannerProps = {
  id: string
}
const BookBanner = ({ id }: BookBannerProps) => {
  const [currBook, setCurrBook] = useState<GoogleBook>()

  const setBook = async () => {
    const newBook = await getBookById(id)
    setCurrBook(newBook)
  }

  useEffect(() => {
    setBook()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <S.BookBannerWrapper>
      <Container>
        <Link href={currBook ? `book/${currBook.id}` : '/'}>
          <motion.div {...animations.wrapper}>
            <S.BookBannerContent>
              <S.BookBannerBody>
                <div className="bg-shapes">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="img-wrapper">
                  {currBook && (
                    <motion.div {...animations.img}>
                      <img
                        src={
                          currBook.volumeInfo.imageLinks
                            ? currBook.volumeInfo.imageLinks.thumbnail
                            : '/img/book-thumbnail.png'
                        }
                        alt={currBook && currBook.volumeInfo.title}
                      />
                    </motion.div>
                  )}
                </div>

                <div className="caption">
                  <div className="info">
                    <div>
                      <motion.div {...animations.text}>
                        <h3 className="title">
                          {currBook && currBook.volumeInfo.title}
                        </h3>
                      </motion.div>
                      <motion.div
                        {...animations.text}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <h4 className="author">
                          {`by `}
                          {currBook && currBook.volumeInfo.authors
                            ? currBook.volumeInfo.authors.join(', ')
                            : null}
                        </h4>
                      </motion.div>
                    </div>

                    <motion.div
                      {...animations.text}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <span className="stats">
                        {`Chapter`} <b>{`2`}</b> {`from`} {`9`}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </S.BookBannerBody>
            </S.BookBannerContent>
          </motion.div>
        </Link>
      </Container>
    </S.BookBannerWrapper>
  )
}

export default BookBanner
