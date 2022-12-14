import styled from 'styled-components'

export const ContainerArticle = styled.article`
  width: 60vw;
  margin: 50px auto;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      border: 1px solid rgba(0, 0, 0, 0.25);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
        inset 2px 2px 3px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 15px;
      background-color: #fff;
      transition: transform 0.2s;
      cursor: pointer;

      h2 {
        font-size: 1.2rem;
        margin-bottom: 5px;
      }

      > span img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      p {
        text-align: justify;
        font-size: 0.9rem;
      }

      &:hover {
        transform: scale(1.1);
      }

      .skeletonStyleImg {
        max-width: 250px;
        width: 100%;
        margin-bottom: 5px;
      }

      .skeletonStyleTitle {
        max-width: 250px;
        width: 100%;
        margin-bottom: 5px;
      }

      .skeletonStyleP {
        max-width: 250px;
        width: 100%;
      }
    }
  }

  > div {
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
  }

  @media (max-width: 1300px) {
    width: 80vw;
  }

  @media (max-width: 1040px) {
    width: 90vw;
  }

  @media (max-width: 875px) {
    ul {
      grid-template-columns: repeat(2, 1fr);

      li {
        img {
          height: 200px;
          object-fit: contain;
        }
      }
    }
  }

  @media (max-width: 465px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`

export const LoadingComponent = styled.span`
  display: block;
  margin: 40px auto 0;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: 4px solid;
  border-color: transparent #181818 transparent #181818;

  animation: loadingAnimation 1.5s linear infinite;

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const ReturnBack = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 40px;
  right: 40px;

  background: #181818;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 20pt;
  color: #fff;

  box-shadow: 0 3px 0 #fff;
  transition: all 0.1s;

  &:hover {
    background: #2d2d2d;
  }

  &:active {
    box-shadow: 0 0 0 #fff;
    transform: translateY(3px);
  }

  @media (max-width: 640px) {
    bottom: 15px;
    right: 15px;
  }
`
