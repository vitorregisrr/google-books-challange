import styled from 'styled-components'

export const BookThumbnailWrapper = styled.div`
  font-size: 1.5rem;
  color: rgba(49, 49, 49, 0.8);
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    color: var(--highlight);
  }

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const BookThumbnailImg = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
  object-position: center center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    height: 250px;
  }
`

export const BookThumbnailTitle = styled.h2`
  font-family: 'SF Pro Display', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: inherit;
  margin: 7px 0 3px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: color 0.2s;
`

export const BookThumbnailAuthor = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: inherit;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s;
`
