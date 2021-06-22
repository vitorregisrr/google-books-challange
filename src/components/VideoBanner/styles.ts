import styled from 'styled-components'

export const VideoBannerWrapper = styled.article``

export const VideoBannerPreview = styled.div`
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;
  width: 100%;
  height: 48vw;
  max-width: 410px;
  max-height: 210px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &::after {
    content: '▶️';
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
