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

type PaginationProps = {
  start: number
  max: number
  totalItems: number
}

const Search = () => {
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [currBooks, setCurrBooks] = useState<GoogleBook[]>([])
  const controllerRef = useRef<AbortController | null>()
  const [pagination, setPagination] = useState<PaginationProps>({
    start: 0,
    max: 9,
    totalItems: 0
  })

  const onCloseHandler = async () => {
    setPagination({
      start: 0,
      max: 9,
      totalItems: 0
    })
    setSearchValue('')
    setCurrBooks([])
    setIsContentVisible(false)
  }

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
      console.log(e)
    }
  }

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
    <S.SearchWrapper>
      <Container>
        <S.SearchInputWrapper isFixed={isContentVisible}>
          <S.SearchInput
            value={searchValue}
            placeholder="Search book"
            onClick={() => !isContentVisible && setIsContentVisible(true)}
            onChange={(e) => inputChangeHandler(e)}
          />

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
                    {isLoadMoreBtnVisible() && (
                      <S.LoadMoreButton onClick={loadMore}>
                        {`Load more`} <PlusIcon />
                      </S.LoadMoreButton>
                    )}
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
    </S.SearchWrapper>
  )
}

export default Search
