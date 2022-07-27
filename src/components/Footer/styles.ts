import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  background: #181818;
  color: #fff;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 100px;
  }

  @media (max-width: 450px) {
    flex-direction: column;

    p {
      margin-bottom: 15px;
    }
  }
`
