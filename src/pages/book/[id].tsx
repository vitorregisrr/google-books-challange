import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import BookTemplate, { BookTemplateProps } from 'templates/Book'
import { getBookById } from 'services/google-books'
import { GoogleBook } from 'types/GoogleBook'

export default function Book({ book }: BookTemplateProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <BookTemplate book={book} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const book: GoogleBook = await getBookById(params.id)

  if (!book) return { notFound: true }

  return {
    props: {
      book
    }
  }
}
