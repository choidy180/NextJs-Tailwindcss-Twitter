import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 12px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        background-color: #141414;
        color: #fff;
    }
    body{
        margin: 0px;
        padding: 0px;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }

    /* CSS */
    .HomeInput{
        border: .5px solid white;
        border-radius: 4px;
        font-weight: 300;
        ::placeholder{
            font-weight: 300;
        }
    }
    .sign_button{
        border: none;
        padding: 8px 0;
        border-radius: 28px;
        background-color: #00ACEE;
        color: white;
        outline: none;
    }
    .indexBorderLine{
        border-top: .4px solid white;
    }
    .Main_SocialIcon{
        cursor: pointer;
    }
    .postUnderIcon{
        cursor: pointer;
    }
    textarea{
        resize: none !important;
        border-bottom: .4px solid #fff;
        outline: none;
        border-bottom: .4px solid #fff;
    }
    input, textarea, ::selection,
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
    .swal2-popup{
        background-color: transparent !important;
    }
    .swal2-html-container{
        margin: 0 !important;
        background-color: #141414;
        border-radius: 18px;
        min-width: 400px;
    }
`;