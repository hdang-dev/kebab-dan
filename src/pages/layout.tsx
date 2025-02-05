import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    /* box-sizing: border-box; */
    width: 100%;
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
