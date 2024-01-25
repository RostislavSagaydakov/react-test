import './styles/App.css';
import BaseLayout from "./templates/base";
import { Provider } from 'react-redux';
import {store} from "./redux"

function App() {
    function deviceViewScreenSizeWidth() {
        let dws = document.querySelector('body').clientWidth;
        // let hh = document.querySelector('.header').clientHeight;
        document.documentElement.style.setProperty('--dws', `${dws}px`);
        // document.documentElement.style.setProperty('--hh', `${hh}px`);
    }
    deviceViewScreenSizeWidth();
    let ro_vws = new ResizeObserver(() => { deviceViewScreenSizeWidth() });
    ro_vws.observe(document.body); // add elements with potential scroll bar

  return (
      <Provider store={store}>
          <BaseLayout/>
      </Provider>
  );
}

export default App;
