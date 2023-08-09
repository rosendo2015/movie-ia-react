import { Container } from './styles'

// eslint-disable-next-line no-redeclare
export function ButtonPlay({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <div className="iconEllipse">{Icon && <Icon />}</div>
      {title}
    </Container>
  )
}
