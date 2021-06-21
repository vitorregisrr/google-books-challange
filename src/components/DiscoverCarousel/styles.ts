import styled from 'styled-components'

export const DiscoverCarouselWrapper = styled.section`
  position: relative;
  z-index: 4;

  &::after {
    content: '';
    position: absolute;
    right: -21px;
    top: -34px;
    width: 120px;
    height: 120px;
    background-image: url('/img/ico/oval-2.svg');
    z-index: 1;
    background-size: 100% 100%;
  }
`

export const DiscoverCarouselContent = styled.div`
  position: relative;
  z-index: 4;

  .slick-list {
    overflow: visible;

    .slick-slide {
      width: 272px !important;
      transform: scale(0.93);
      transition: all 0.5s ease-in-out;

      &.slick-current {
        transform: scale(1);
      }
    }
  }
`

type DiscoverCarouselItemProps = {
  bgc?: string
  hasShape?: boolean
}

export const DiscoverCarouselItem = styled.article`
  position: relative;
  display: flex !important;
  align-items: center;
  width: 100%;
  height: 139px;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px 24px 10px 20px;
  transition: transform 0.3s;
  cursor: pointer;

  ${(props: DiscoverCarouselItemProps) => `
    background-color: ${props.bgc || 'rgb(0, 23, 61, .96)'};
  `}

  &::after {
    content: '';
    ${(props: DiscoverCarouselItemProps) => `
     ${
       props.hasShape &&
       `
        position: absolute;
        left: 0;
        bottom: 0;
        width: 120px;
        height: 120px;
        background-image: url('/img/ico/oval-1.svg');
        z-index: 1;
        background-size: 100% 100%;`
     }
    `}
  }

  &:hover {
    transform: scale(1.02);
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    width: 60%;
    height: 100%;
    z-index: 2;

    .title {
      font-family: 'Playfair Display', serif;
      font-size: 27px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 3px;
      margin-top: 6px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .author {
      font-family: 'SF Pro Display', sans-serif;
      font-weight: 400;
      font-style: italic;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1.28889px;
      color: #e7e7e1;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .stats {
      display: flex;
      align-items: center;
      position: relative;
      font-family: 'SF Pro Display', sans-serif;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.020635px;
      color: #e7e7e1;
      margin-bottom: 12px;

      b {
        margin-right: 2px;
      }

      &::before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('/img/ico/stats.svg');
        margin-right: 3px;
      }
    }
  }

  .img-wrapper {
    position: relative;
    margin-left: auto;
    width: 72px;

    img:not(.shape) {
      width: 100%;
      height: 111px;
      object-fit: cover;
      object-position: center center;
      border-radius: 5px;
      z-index: 2;
    }

    .shape {
      position: absolute;

      &.shape-1 {
        top: -10px;
        left: -10px;
      }

      &.shape-2 {
        top: -0px;
        left: -35px;
      }

      &.shape-3 {
        left: -34px;
        bottom: -90px;
      }
    }
  }
`

export const DiscoverCarouselPreview = styled.div`
  width: 100%;
  height: 139px;
  border-radius: 5px;
  margin-right: 10px;
  background-image: linear-gradient(100deg, #ddd 0px, #e0e0e0 80px, #ddd 120px);
  background-size: 400px;
  animation: shine-preview 1s infinite linear;
  opacity: 0.9;

  @keyframes shine-preview {
    from {
      background-position: -100px;
    }
    to {
      background-position: 260px;
    }
  }
`
