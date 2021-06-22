import { useState, useEffect } from 'react'
import { Container } from 'components/UI/'
import Slider from 'react-slick'
import { getBookById } from 'services/google-books'
import { motion } from 'framer-motion'
import * as animations from './animations'

import * as S from './styles'
import { GoogleBook } from 'types/GoogleBook'
import Link from 'next/link'

type DiscoverCarouselProps = {
  books: {
    id: string
  }[]
}
const DiscoverCarousel = ({ books }: DiscoverCarouselProps) => {
  const [currBooks, setCurrBooks] = useState<GoogleBook[]>()
  const config = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    doots: false,
    slidesToScroll: 1
  }

  const setBooks = async () => {
    const booksPromises = books.map(({ id }) => {
      return getBookById(id)
    })

    Promise.all(booksPromises).then((newBooks) => {
      setCurrBooks(newBooks)
    })
  }

  useEffect(() => {
    setBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books])

  return (
    <S.DiscoverCarouselWrapper>
      <Container>
        <S.DiscoverCarouselContent>
          <Slider {...config}>
            {currBooks && currBooks.length > 0
              ? currBooks.map((book, index) => (
                  <Link href={`/book/${book.id}`} key={book.id}>
                    <motion.div {...animations.card}>
                      <S.DiscoverCarouselItem
                        //dumb/provisory bgc and hasShape test
                        bgc={index === 1 && 'rgb(69, 20, 117, .93)'}
                        hasShape={index !== 1}
                        key={book.id}
                      >
                        <div className="info">
                          <div>
                            <motion.div {...animations.text}>
                              <h3 className="title">{book.volumeInfo.title}</h3>
                            </motion.div>
                            <motion.div
                              {...animations.text}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              <h4 className="author">
                                {book.volumeInfo.authors
                                  ? book.volumeInfo.authors.join(', ')
                                  : null}
                              </h4>
                            </motion.div>
                          </div>

                          <motion.div
                            {...animations.text}
                            transition={{ delay: 0.3, duration: 0.8 }}
                          >
                            <span className="stats">
                              <b>{`120+`}</b> {` Read Now`}
                            </span>
                          </motion.div>
                        </div>

                        <div className="img-wrapper">
                          {/*the shapes are in the html for use animations*/}
                          <motion.div {...animations.shape1}>
                            <img
                              alt="Triangle background shape"
                              src="/img/ico/shape-triangle.svg"
                              className="shape shape-1"
                            />
                          </motion.div>
                          <motion.div {...animations.shape2}>
                            <img
                              alt="Circle background shape"
                              src="/img/ico/shape-circle.svg"
                              className="shape shape-2"
                            />
                          </motion.div>
                          <motion.div {...animations.shape3}>
                            <img
                              alt="Rectangle background shape"
                              src="/img/ico/shape-retangle.svg"
                              className="shape shape-3"
                            />
                          </motion.div>

                          <motion.div {...animations.img}>
                            <img
                              src={
                                book.volumeInfo.imageLinks
                                  ? book.volumeInfo.imageLinks.thumbnail
                                  : '/img/book-thumbnail.png'
                              }
                              alt={book.volumeInfo.title}
                            />
                          </motion.div>
                        </div>
                      </S.DiscoverCarouselItem>
                    </motion.div>
                  </Link>
                ))
              : books.map((_, i) => <S.DiscoverCarouselPreview key={i} />)}
          </Slider>
        </S.DiscoverCarouselContent>
      </Container>
    </S.DiscoverCarouselWrapper>
  )
}

export default DiscoverCarousel
