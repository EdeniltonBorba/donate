import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #ecf0f1;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family:'Open Sans', sans-serif !important;
  }
`;
export default GlobalStyle;