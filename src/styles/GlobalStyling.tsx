import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";
/**
 * Provide some basic styling for the app using createGlobalStyle and
 * use our Theme interface to ensure we can use our theme as props
 */
export default createGlobalStyle<{ theme: Theme }>`

    :root {
        --vh: calc(100vh * 0.01);
    }

    * {
        box-sizing: inherit;
    }
    
    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: Roboto;
        background-color: ${({ theme }) => theme.colors.main.backgroundColor};
        color: ${({ theme }) => theme.colors.main.textColor};
    }

    button {
        border-radius: ${({ theme }) => theme.borderRadius.subtle};
    }
`;
