import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.COLORS.GRAY};
  border: 0;

  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  cursor: pointer;

  .iconEllipse {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    border-radius: 50%;
  }
  .iconEllipse svg {
    position: absolute;
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    flex-shrink: 0;
  }
`
