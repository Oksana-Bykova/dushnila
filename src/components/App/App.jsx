
import './App.css';
import { Provider } from "react-redux";
import { store } from "../../redux";

import Header from '../Header/Header';
import Indicators from '../Indicators/Indicators';
import Status from '../Status/Status';


function App() {
  return (
    <Provider store={store}>
    <div className='page'>
      <header>
        <Header></Header>
        <Indicators></Indicators>
        <Status></Status>
      </header>
    </div>
    </Provider>
  );
}

export default App;
