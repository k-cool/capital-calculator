import { useState } from 'react';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/Theme';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [theme, setTheme] = useState({ current: lightTheme, text: 'light' });

  return (
    <ThemeProvider theme={theme.current}>
      <GlobalStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
