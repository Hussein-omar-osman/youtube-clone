import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 20px;
`;

function App() {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <h2>Menu</h2>
        <Main>
          <h2>Navbar</h2>
          <Wrapper>
            <h2>Video clips</h2>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
