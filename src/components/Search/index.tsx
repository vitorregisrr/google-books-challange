import { useState, useEffect, useRef } from 'react'
import { getBooksByQuery } from 'services/google-books'
import { GoogleBook } from 'types/GoogleBook'
import { motion, AnimatePresence } from 'framer-motion'
import Simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { Container, BookThumbnail, Spinner } from 'components/UI/'

import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline'
import { Plus as PlusIcon } from '@styled-icons/heroicons-outline'

import * as S from './styles'
import * as animations from './animations'

const Search = () => {
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [currBooks, setCurrBooks] = useState([])
  const controllerRef = useRef<AbortController | null>()
  const [pagination, setPagination] = useState({
    start: 0,
    max: 9,
    totalItems: 0
  })

  // Close handling function
  const onCloseHandler = async () => {
    setPagination({
      start: 0,
      max: 9,
      totalItems: 0
    })
    setSearchValue('')
    setIsContentVisible(false)
    setCurrBooks([])
  }

  // called on search input onChange
  const inputChangeHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const searchBooks = async () => {
    // using signal AbortController signal
    if (controllerRef.current) {
      controllerRef.current.abort()
    }
    const controller = new AbortController()
    controllerRef.current = controller

    // try to fetch and set data
    try {
      const {
        books,
        totalItems
      }: {
        books: GoogleBook[]
        totalItems: number
      } = await getBooksByQuery({
        search: searchValue,
        pagination,
        signal: controllerRef.current?.signal
      })
      setCurrBooks(books)
      setPagination((old) => {
        return { ...old, totalItems: totalItems }
      })
    } catch (e) {
      // turn it if abborted or had some error
      console.log(e)
    }
  }

  // called on load more button onClick
  const loadMore = async () => {
    if (!isFetching) {
      setIsFetching(true)
      const newPagination = {
        ...pagination,
        start: pagination.start + pagination.max
      }
      const { books }: { books: GoogleBook[] } = await getBooksByQuery({
        search: searchValue,
        pagination: newPagination
      })
      setCurrBooks((old) => old.concat(books))
      setPagination(newPagination)
      setIsFetching(false)
    }
  }

  // called on every input change
  useEffect(() => {
    if (searchValue !== '') {
      searchBooks()
    } else {
      if (controllerRef.current) {
        controllerRef.current.abort()
      }
      setPagination({
        start: 0,
        max: 9,
        totalItems: 0
      })
      setCurrBooks([])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const isLoadMoreBtnVisible = () =>
    pagination.start < pagination.totalItems - (pagination.max + 1)

  return (
    <>
      <Container>
        <S.SearchInputWrapper isFixed={isContentVisible}>
          <S.SearchInput
            value={searchValue}
            placeholder="Search book"
            onClick={() => !isContentVisible && setIsContentVisible(true)}
            onChange={(e) => inputChangeHandler(e)}
          />
          {/* Close button animation -> only visible if isContentVisible */}
          <AnimatePresence>
            {isContentVisible && (
              <motion.div {...animations.fade}>
                <S.SearchCloseButton onClick={() => onCloseHandler()}>
                  <CloseIcon title="Close" />
                </S.SearchCloseButton>
              </motion.div>
            )}
          </AnimatePresence>
        </S.SearchInputWrapper>
      </Container>
      {/* SearchContent animation -> only visible if isContentVisible */}
      <AnimatePresence>
        {isContentVisible && (
          <motion.div {...animations.circle}>
            <S.SearchContentWrapper>
              <Container>
                <Simplebar
                  autoHide={false}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <S.SearchContentBody>
                    {/* Books rendering */}
                    {currBooks && currBooks.length > 0 ? (
                      <>
                        {currBooks.map((book: GoogleBook) => (
                          <BookThumbnail
                            key={book.id}
                            title={book.volumeInfo.title}
                            author={
                              book.volumeInfo.authors
                                ? book.volumeInfo.authors.join(', ')
                                : null
                            }
                            img={
                              book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.thumbnail
                                : '/img/book-thumbnail.png'
                            }
                            link={`book/${book.id}`}
                          />
                        ))}
                      </>
                    ) : (
                      <Spinner />
                    )}
                  </S.SearchContentBody>
                  <S.LoadMoreWrapper>
                    {/* Render LoadMoreButton if there is more items to be displayed */}
                    {isLoadMoreBtnVisible() && (
                      <S.LoadMoreButton onClick={loadMore}>
                        <PlusIcon />
                      </S.LoadMoreButton>
                    )}
                    {/* Render pagination count if there is items to be displayed */}
                    {pagination.totalItems > 0 && (
                      <S.LoadMoreCount>
                        Items:{' '}
                        {`${pagination.start + pagination.max} / ${
                          pagination.totalItems
                        }`}
                      </S.LoadMoreCount>
                    )}
                  </S.LoadMoreWrapper>
                </Simplebar>
              </Container>
            </S.SearchContentWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Search
