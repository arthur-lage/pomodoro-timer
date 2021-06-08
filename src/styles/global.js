import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html{
        font-size: 93.75%
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        font-family: "Poppins";
    }

    @media only screen and (max-width: 768px){
        html{
            font-size: 87.5%
        }
    }

    @media only screen and (max-width: 425px){
        html{
            font-size: 82.25%
        }
    }

    @media only screen and (max-width: 375px){
        html{
            font-size: 77%
        }
    }

    @media only screen and (max-width: 320px){
        html{
            font-size: 71.75%
        }
    }
`