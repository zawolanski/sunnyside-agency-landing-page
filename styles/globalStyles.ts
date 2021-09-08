import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import normalize from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
    ${normalize}
    ${reset}

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.color.background.primary};
        color: ${({ theme }) => theme.color.text.dark};
    }

    body, button {
        font-family: ${({ theme }) => theme.font.family.barlow}, sans-serif;
        font-weight: ${({ theme }) => theme.font.weight[600]};
        font-size: 18px;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyled;
