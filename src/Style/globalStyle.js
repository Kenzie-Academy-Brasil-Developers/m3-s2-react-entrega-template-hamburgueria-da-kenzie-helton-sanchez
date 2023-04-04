import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


    :root{

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        --font-poppins: font-family: 'Poppins';

    }

    font-family: 'Inter', sans-serif;

    h1{
        font-size: 1.625rem;
        font-weight: bold;
    }
    h2{
        font-size: 1.375rem;
        font-weight: bold;}
    h3{
        font-size: 1.125rem;
        font-weight: bold;}
    h4{
        font-size: 0.875rem;
        font-weight: bold;}
    p{
        font-size: 0.875rem;
    }
    span{
        font-size: 0.75rem;
    }



`

