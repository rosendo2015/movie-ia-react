import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body{
        background-image: linear-gradient(90deg, rgba(159,85,255,0.9198698098667133) 0%, rgba(159,85,240,0.8048538354258187) 37%, rgba(255,70,185,1) 100%);
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-family: Outfit;
    }
    

`
