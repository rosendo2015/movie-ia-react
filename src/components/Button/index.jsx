import { Container } from './styles'

// eslint-disable-next-line no-redeclare
export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
      <div className="iconEllipse">{Icon && <Icon />}</div>
    </Container>
  )
}
