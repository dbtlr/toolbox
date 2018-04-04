
import { injectGlobal } from 'styled-components';

injectGlobal`
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);

:root {
  --background-color: #FFFFFA;
  --text-color: #6a7987;
  --light-color: #CFCFCF;
  --menu-background-color: #6a7987cc;
  --primary-color: #456990;
  --secondary-color: #FF6700;
  --light-primary-color: #9DD8CE;
  --light-secondary-color: #E9B872;
  --error-color: #A40E4C;
}

html {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--dark-color);
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 300;
  
  &.strong {
    font-weight: 700;
  }
  
  a, a:hover {
    text-decoration: none;
  }
}

strong {
  font-weight: 700;
}

a {
  color: var(--primary-color);
  
  &:hover {
    color: var(--secondary-color);
  }
}

/* Main layout styles */
#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4rem 1fr 3.5rem;
  
  grid-template-areas:
    "header"
    "body"
    "footer";
  
  & > header {
    grid-area: header;
  }
  
  & > main {
    grid-area: body;
    padding: 3rem 1rem;
  }
  
  & > footer {
    grid-area: footer;
  }
}
`;
