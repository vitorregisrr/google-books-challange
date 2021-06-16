import { useRouter } from 'next/dist/client/router'

// @ts-ignore
import { BookType } from 'types/book'

export type BookTemplateProps = {
  book: BookType
}

export default function BooksTemplate({ book }: BookTemplateProps) {
  console.log(JSON.stringify(book))
  const router = useRouter()

  if (router.isFallback) return null

  console.log(book)

  return <>{book.volumeInfo.title}</>
}
