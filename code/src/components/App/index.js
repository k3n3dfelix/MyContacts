//import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import ContactsList from '../ContactsList';
//import { defaultTheme } from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';

import { Container } from './styles';

function App() {
  return (
    <>  <BrowserRouter>
            <GlobalStyles/>
            <Container>
                <Header/>
                <Routes />
            </Container>
        </BrowserRouter>
    </>

  );
}

export default App;
