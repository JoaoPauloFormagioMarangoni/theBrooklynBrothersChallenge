import styled from 'styled-components'

export const ContainerHeader = styled.header`
  background: #181818;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 100px;
  }

  form {
    position: relative;

    input {
      padding: 5px 10px;
      font-size: 1rem;
      border-radius: 10px;
      border: 0;

      &:focus {
        outline-color: #5555ff;
      }
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
`
