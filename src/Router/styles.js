import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fdfcfa;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand/Quicksand-Bold.ttf'); 
    font-style: normal;
    font-weight: 700;
  } 

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand/Quicksand-SemiBold.ttf'); 
    font-style: normal;
    font-weight: 600;
  } 

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand/Quicksand-Medium.ttf'); 
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand/Quicksand-Regular.ttf'); 
    font-weight: 400;
    font-style: normal;
  } 

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand/Quicksand-Light.ttf'); 
    font-style: normal;
    font-weight: 300;
  } 

  @font-face {
    font-family: 'Rozha One';
    src: url('/fonts/RozhaOne/RozhaOne-Regular.ttf'); 
    font-style: normal;
    font-weight: 400;
  } 
  
  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/Comfortaa-Bold.ttf'); 
    font-style: normal;
    font-weight: 600;
  } 

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/Comfortaa-SemiBold.ttf'); 
    font-style: normal;
    font-weight: 500;
  } 

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/Comfortaa-Regular.ttf'); 
    font-style: normal;
    font-weight: 400;
  } 

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/Comfortaa-Medium.ttf'); 
    font-style: normal;
    font-weight: 300;
  } 

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa/Comfortaa-Light.ttf'); 
    font-style: normal;
    font-weight: 200;
  } 
`;
