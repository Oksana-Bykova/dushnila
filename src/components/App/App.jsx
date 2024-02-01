import { Provider } from "react-redux";
import { store } from "../../redux";

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';


function App() {
  return (
    <Provider store={store}>
    <div className='page'>
      <header>
        <Header></Header>
      </header>
      <main>
        <Main></Main>
      </main>
    </div>
    </Provider>
  );
}

export default App;
