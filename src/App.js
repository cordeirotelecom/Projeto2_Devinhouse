import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import LoadInfo from './components/LoadInfo';

function App() {

  return (
    <>
      <Provider store={store}>
        <LoadInfo>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </LoadInfo>
      </Provider>
    </>
  );
}

export default App;
