import { GoogleBook } from 'types/GoogleBook'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
const REQUEST_URL = `https://www.googleapis.com/books/v1/volumes?`

type getBooksByQueryProps = {
  search: string
  pagination: {
    max: number
    start: number
    totalItems: number
  }
  signal?: any
}

export const getBooksByQuery = async ({
  search,
  pagination,
  signal
}: getBooksByQueryProps) => {
  const fetchUrl =
    REQUEST_URL +
    new URLSearchParams({
      q: search,
      startIndex: pagination.start.toString(),
      maxResults: pagination.max.toString(),
      key: API_KEY
    })

  const response = await fetch(fetchUrl, { signal: signal || null })
  const data = await response.json()
  const books: GoogleBook[] = data.items
  const totalItems: number = data.totalItems

  return { books, totalItems }
}

export const getBookById = async (id: string) => {
  const fetchUrl =
    REQUEST_URL +
    new URLSearchParams({
      q: id,
      key: API_KEY
    })
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const book: GoogleBook = data.items ? data.items[0] : null

  return book
}
