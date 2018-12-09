import { createGlobalStyle } from "styled-components";

const MainStyle = createGlobalStyle`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0};
  html {
    box-sizing:border-box; 
    font-size: 62.5%
  }
  *,:after,:before{box-sizing:inherit};
  body {
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    background-color: #e6e6e6;
    padding: 6rem 0;
  }
  img {
    width: 100%;
  }
  a {
    color: inherit;
  }
  p {
    letter-spacing: 1px;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 6rem;
  }
`;

export default MainStyle;
