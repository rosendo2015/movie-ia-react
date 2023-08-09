import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem;
  width: 100%;
  .imagePoster {
    width: 194px;
    height: 288.513px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.COLORS.GRAY_LG};
    border-radius: 8px;
    overflow: hidden;
  }
  .imagePoster img {
    width: fit-content;
    height: 288.513px;
    border-radius: 8px;
    transition: all 0.7s;
    cursor: pointer;
  }
  .imagePoster img:hover {
    scale: 1.05;
  }

  .wrapper {
    margin: auto;
    width: 780px;
    border: 3px solid ${({ theme }) => theme.COLORS.VIOLET};
    display: flex;
    padding: 64px 96px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    border-radius: 16px;

    background: ${({ theme }) => theme.COLORS.GRAY_DARK};
    box-shadow: 0px -3px 22px 0px rgba(0, 0, 0, 0.35);
  }
  .wrapper-cards {
    width: 654px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    margin-bottom: 41px;
  }
`
