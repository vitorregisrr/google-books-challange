import styled from 'styled-components'

export const BookBannerWrapper = styled.article``

export const BookBannerContent = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateX(10px);
  }
`

export const BookBannerBody = styled.div`
  position: relative;
  display: flex;
  background-color: var(--green);
  border-radius: 5px;
  max-width: 332px;
  width: 93%;
  height: 100px;
  transition: transform 0.3s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: var(--green);
    transform: translateX(-100%);
  }

  .img-wrapper {
    position: relative;
    width: 91px;
    height: 136px;
    filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.04));

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
      transform: translateY(-14%);
      filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
    }
  }

  .caption {
    padding-left: 12px;

    .title {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 2px;
      margin-bottom: 4px;
      margin-top: 6px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .author {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
      color: var(--dark--5);
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 24px;
    }

    .stats {
      display: flex;
      align-items: center;
      position: relative;
      font-family: 'SF Pro Display', sans-serif;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.020635px;
      color: var(--dark--4);
      margin-bottom: 12px;

      b {
        color: var(--highlight);
        margin-right: 2px;
        margin-left: 2px;
      }

      &::before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('/img/ico/book-small.svg');
        margin-right: 3px;
      }
    }
  }
`
