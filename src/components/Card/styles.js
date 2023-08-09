import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  .headerCard {
    width: 194px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .headerCard svg {
    filter: drop-shadow(0px 0px 14.407779693603516px rgba(254, 234, 53, 0.25));
  }
  .star-nota {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.YELLOW};
    fill: var(--cores-amarelo, #feea35);
    filter: drop-shadow(0px 0px 14.407779693603516px rgba(254, 234, 53, 0.25));
  }

  h2 {
    display: flex;
    align-items: center;
    width: 140px;
    max-width: 140px;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 100%; /* 20px */
    max-height: 40px; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`
