import { Container } from './styles'

export function Card({ title, icon: Icon, nota, ...rest }) {
  return (
    <Container {...rest}>
      <div className="headerCard">
        <h2> {title}</h2>
        <div className="star-nota">
          {Icon && <Icon weight="fill" />}
          <p>{nota}</p>
        </div>
      </div>
    </Container>
  )
}
