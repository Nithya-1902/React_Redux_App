import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer />
    </Provider>
  );
}

export default App;
