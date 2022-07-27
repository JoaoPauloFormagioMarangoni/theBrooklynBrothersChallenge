import Logo from '../../assets/logo.jpg'
import { ContainerFooter } from './styles'

export function Footer() {
  return (
    <ContainerFooter>
      <img src={Logo} alt="The Brooklyn Brothers" />
      <p>&copy; João Paulo Formagio Marangoni</p>
    </ContainerFooter>
  )
}
