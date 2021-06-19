import Link from 'next/link'

import * as S from './styles'

type BookThumbnailProps = {
  title: string
  img: string
  link: string
  author?: string
}

const BookThumbnail = ({ img, title, link, author }: BookThumbnailProps) => (
  <Link href={link}>
    <S.BookThumbnailWrapper className="book-thumbnail">
      <S.BookThumbnailImg src={img} alt={title} />
      <S.BookThumbnailTitle>{title}</S.BookThumbnailTitle>
      {author && (
        <S.BookThumbnailAuthor>
          {`by `}
          {author}
        </S.BookThumbnailAuthor>
      )}
    </S.BookThumbnailWrapper>
  </Link>
)

export default BookThumbnail
