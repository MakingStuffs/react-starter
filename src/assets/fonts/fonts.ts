import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Roboto-Regular.woff";
import RobotoMonoRegular from "./RobotoMono-Regular.woff";
import RobotoBold from "./Roboto-Bold.woff";
import RobotoItalic from "./Roboto-Italic.woff";
import OleoScriptRegular from "./OleoScript-Regular.woff";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoRegular});
        font-display: swap;
    }

    @font-face {
        font-family: Roboto;
        font-style: bold;
        font-weight: 900;
        src: url(${RobotoBold});
        font-display: swap;
    }

    @font-face {
        font-family: Roboto;
        font-style: italic;
        font-weight: 400;
        src: url(${RobotoItalic});
        font-display: swap;
    }

    @font-face {
        font-family: RobotoMono;
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoMonoRegular});
        font-display: swap;
    }

    @font-face {
        font-family: OleoScript;
        font-style: normal;
        font-weight: 400;
        src: url(${OleoScriptRegular});
        font-display: swap;
    }
`;
