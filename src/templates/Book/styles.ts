import styled from 'styled-components'

export const BookTemplateWrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  padding-bottom: 140px;

  @supports (-webkit-touch-callout: none) {
    padding-bottom: 230px;
  }
`

export const BookTemplateHeader = styled.header`
  position: relative;
  width: 100%;
  height: 272px;
  background-color: #fff6e5;
  border-radius: 0 0 100px 0;
  padding: 40px 0 0 0;

  .link {
    margin-left: 10px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .img-wrapper {
    position: relative;
    width: 151px;
    height: 234px;
    margin: 0 auto;
    transform: translateY(14px);
    border-radius: 5px;
    z-index: 2;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
      border-radius: 5px;
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      left: 2px;
      bottom: 10px;
      width: 146px;
      height: 17px;
      background: rgba(0, 0, 0, 0.3);
      z-index: -1;
      filter: blur(24.1828px);
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
      z-index: -1;

      &:nth-child(1) {
        bottom: 40px;
        right: -19px;
        width: 48px;
        height: 48px;
        background-image: url('/img/ico/oval-7.svg');
      }

      &:nth-child(2) {
        top: -94px;
        right: -150px;
        width: 110px;
        height: 110px;
        background-image: url('/img/ico/oval-8.svg');
      }

      &:nth-child(3) {
        top: 1px;
        right: -9px;
        width: 24px;
        height: 24px;
        background-image: url('/img/ico/oval-9.svg');
      }

      &:nth-child(4) {
        top: 29px;
        left: -38px;
        animation-delay: 1s;
        width: 63px;
        height: 63px;
        border-radius: 50%;
        background-color: #00173d;
      }

      &:nth-child(4) {
        top: 29px;
        left: -38px;
        animation-delay: 1s;
        width: 63px;
        height: 63px;
        border-radius: 50%;
        background-color: #00173d;
      }

      &:nth-child(5) {
        top: 35px;
        left: -64px;
        animation-delay: 1s;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #ff6978;
      }
    }
  }
`

export const BookTemplateBody = styled.div`
  padding-top: 70px;

  .title {
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    font-style: normal;
    font-weight: 400;
  }

  .desc {
    font-family: 'SF Pro Text', sans-serif;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
  }

  .author {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    letter-spacing: 0.670588px;
    color: #ff6978;
    margin: 10px 0;
  }
`
