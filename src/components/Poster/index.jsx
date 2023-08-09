import { Container } from './styles'

export function Poster({
  icon1: Icon1,
  duration,
  icon2: Icon2,
  year,
  ...rest
}) {
  return (
    <Container {...rest}>
      <div className="info">
        {Icon1 && <Icon1 size={20} />}
        {duration}
      </div>
      <div className="info">
        {Icon2 && <Icon2 size={20} />}
        {year}
      </div>
    </Container>
  )
}
