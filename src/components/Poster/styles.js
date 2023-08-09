import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 194px;

  flex-shrink: 0;
  border-radius: 8px;

  .info {
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 8px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_LG};
  }
  .info svg {
    width: 20px;
    height: 20px;
  }
`
