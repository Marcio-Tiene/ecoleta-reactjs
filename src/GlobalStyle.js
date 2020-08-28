import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --title-color: #322153;
    --primary-color: #34cb79;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-family: 'Roboto', sans-serif;
}

body{
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
}

a{
    text-decoration: none;

}

h1, h2, h3, h4, h5, h6{
    color: var(--title-color);
    font-family: 'Ubuntu', sans-serif;

}
`;