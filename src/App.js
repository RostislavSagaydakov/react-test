import './styles/App.css';
import BaseLayout from "./templates/base";
import { Provider } from 'react-redux';
import {store} from "./redux"

function App() {
  return (
      <Provider store={store}>
          <BaseLayout/>
      </Provider>
  );
}

export default App;
