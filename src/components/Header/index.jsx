import { Container } from './styles'
import logoImg from '../../assets/Logo.svg'
import { Button } from '../Button'
import { Lightning } from '@phosphor-icons/react'

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <Button title="Nova recomendação" icon={Lightning}></Button>
    </Container>
  )
}
