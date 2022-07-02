import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import { defaultTheme } from '../../assets/styles/themes/default';
import Header from '../Header';

import { Container } from './styles';

function App() {
  return (
    <>
        <GlobalStyles/>
          <Container>
            <Header></Header>
          </Container>
    </>

  );
}

export default App;
