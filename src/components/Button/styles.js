import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #8323ff 0%, #ff2daf 100%);
  border: 0;

  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  cursor: pointer;

  &&:hover {
    background: linear-gradient(90deg, #ff2daf 0%, #8323ff 100%);
  }
  .iconEllipse {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
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
