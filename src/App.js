import './App.css';
import Appbar from './components/appbar';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Appbar />
    </div>
    </Provider>
  );
}

export default App;
