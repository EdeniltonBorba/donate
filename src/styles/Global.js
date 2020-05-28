import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

html, body, #root {
  height:100%;
}

`;
