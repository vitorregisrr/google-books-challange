import styled from 'styled-components'

type SearchInputWrapperProps = {
  isFixed: boolean
}

export const SearchWrapper = styled.section`
  position: absolute;
  width: 100vw;
  z-index: 1400;

  .container {
    height: 100%;
  }
`

export const SearchInputWrapper = styled.div`
  position: ${(props: SearchInputWrapperProps) =>
    props.isFixed ? 'fixed' : 'absolute'};
  top: 50px;
  width: 100%;
  max-width: inherit;
  z-index: 1200;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 18px;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    background-size: contain;
    background-position: center center;
    background-image: url('/img/ico/search.svg');
  }
`

export const SearchInput = styled.input`
  font-family: 'SF Display Text', sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 48px;
  color: var(--dark--2);
  border: none;
  border-radius: 10px;
  padding: 1.4px 10px 0 46px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    color: var(--dark--1);
  }
`

export const SearchContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media screen and (min-width: 778px) {
    padding-top: 136px;
  }

  .simplebar-offset {
    width: 100%;
  }
  .simplebar-track {
    pointer-events: all;

    &.simplebar-vertical {
      right: -15px;
      opacity: 0.4;
      width: 9px;
      cursor: pointer;

      .simplebar-scrollbar {
        &::before {
          height: 94%;
          background-color: var(--dark--1);
        }
      }

      @media screen and (min-width: 768px) {
        right: -20px;
      }
    }
  }
`

export const SearchContentBody = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 136px;

  @media screen and (min-width: 778px) {
    padding-top: 15px;
  }

  & > div,
  article {
    width: 29.9%;

    @media screen and (min-width: 555px) {
      width: 18.8%;
    }
  }
`

export const SearchCloseButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 26px;
    color: var(--highlight);
    transition: opacity 0.3s;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`

export const LoadMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 180px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`

export const LoadMoreCount = styled.span`
  font-weight: 400;
  opacity: 0.7;
  animation: fadeIn 0.3s;
  animation-delay: 2s;
`

export const LoadMoreButton = styled.button`
  color: #fff;
  background-color: var(--highlight);
  padding: 6px 15px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  transition: all 0.3s;
  animation: fadeIn 0.3s;
  animation-delay: 2s;

  &:hover {
    transform: scale(1.04);
    opacity: 1;
  }

  svg {
    width: 20px;
    border: none;
  }
`

export const ErrorMessage = styled.span`
  font-size: 1.4rem;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 40px;
  font-weight: 800;
  animation: fadeIn 0.3s;
  opacity: 0.8;
`

export const BoundSmoother = styled.span`
  display: block;
  position: fixed;
  left: 0;
  top: 122px;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    180deg,
    rgba(254, 250, 246, 1) 0%,
    rgba(254, 250, 246, 0) 100%
  );
`
