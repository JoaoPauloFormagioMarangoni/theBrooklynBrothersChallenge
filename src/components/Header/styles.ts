import styled from 'styled-components'

export const ContainerHeader = styled.header`
  background: #181818;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 100px;
  }

  > div {
    display: flex;
    align-items: center;

    > button {
      padding: 4px 10px;
      font-size: 1rem;
      border-radius: 10px;
      margin-right: 20px;
      background-color: #fff;
      border: 0;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #747474;
        color: #fff;
      }
    }

    form {
      display: flex;
      align-items: center;

      select {
        width: 150px;
        margin-right: 20px;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 1rem;
      }

      div {
        position: relative;

        input {
          padding: 5px 10px;
          font-size: 1rem;
          border-radius: 10px;
          border: 0;
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 30px;
          border-radius: 0 10px 10px 0;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: filter 0.2s;

          .searchButton {
            font-size: 1rem;
          }

          &:hover {
            filter: brightness(0.9);
          }
        }
      }

      select:focus,
      input:focus {
        outline-color: #5555ff;
      }
    }
  }

  @media (max-width: 580px) {
    flex-direction: column;

    > div {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 460px) {
    > div {
      form {
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;

        select {
          margin: 0;
        }
      }
    }
  }
`
