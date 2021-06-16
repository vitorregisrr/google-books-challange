import { BookType } from 'types/book'

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY
const REQUEST_URL = `https://www.googleapis.com/books/v1/volumes?`

type findBooksByQueryProps = {
  id: string
  search: string
  pagination: {
    max: string
    start: string
  }
}

export const findBooksByQuery = async ({
  search,
  pagination
}: findBooksByQueryProps) => {
  const fetchUrl =
    REQUEST_URL +
    new URLSearchParams({
      q: search,
      startIndex: pagination.start,
      maxResults: pagination.max,
      key: API_KEY
    })
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const books: BookType[] = data.items

  return books
}

export const findBookById = async (id: string) => {
  const fetchUrl =
    REQUEST_URL +
    new URLSearchParams({
      q: id,
      key: API_KEY
    })
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const book: BookType = data.items[0]

  return book
}
