import { useState } from 'react';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/Theme';

function App() {
  const [theme, setTheme] = useState({ current: lightTheme, text: 'light' });

  return (
    <ThemeProvider theme={theme.current}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
