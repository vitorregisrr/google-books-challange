import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { GoogleBook } from 'types/GoogleBook'
import * as animations from './animations'

import * as S from './styles'

export type BookTemplateProps = {
  book: GoogleBook
}

export default function BooksTemplate({ book }: BookTemplateProps) {
  console.log(JSON.stringify(book))
  const router = useRouter()

  if (router.isFallback) return null

  console.log(book)

  return (
    <motion.div {...animations.fade}>
      <S.BookTemplateWrapper>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : '/img/book-thumbnail.png'
          }
        />
        {book.volumeInfo.title}
      </S.BookTemplateWrapper>
    </motion.div>
  )
}
