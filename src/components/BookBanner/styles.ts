import styled from 'styled-components'

export const BookBannerWrapper = styled.article``

export const BookBannerContent = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 46px;
  cursor: pointer;
  transition: transform 0.3s;

  @media screen and (min-width: 768px) {
    &:hover {
      transform: translateX(10px);
    }
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
    z-index: 2;

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
    z-index: 2;

    .title {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 2px;
      margin-bottom: 4px;
      margin-top: 8px;
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
      margin-bottom: 23px;
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

  .bg-shapes {
    @keyframes zoomIn {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    span {
      position: absolute;
      z-index: 1;
      background-size: 100% 100%;
      animation: zoomIn 0.8s;
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
      transform: scale(0);

      &:nth-child(1) {
        top: 0;
        left: -40px;
        width: 80px;
        height: 80px;
        background-image: url('/img/ico/oval-3.svg');
      }

      &:nth-child(2) {
        bottom: 0;
        right: 0px;
        width: 70px;
        height: 70px;
        background-image: url('/img/ico/oval-6.png');
      }

      &:nth-child(3) {
        top: -6px;
        right: 84px;
        width: 18px;
        height: 18px;
        background-image: url('/img/ico/oval-5.png');
      }

      &:nth-child(4) {
        top: -27px;
        right: -25px;
        width: 69px;
        height: 69px;
        background-image: url('/img/ico/oval-4.png');
        animation-delay: 1s;
      }
      &:nth-child(5) {
        bottom: 0px;
        right: -28px;
        width: 56px;
        height: 56px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url('/img/ico/shape-rectangle-2.png');
        animation-delay: 1s;
      }
    }
  }
`
