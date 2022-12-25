import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from "./store/index";
import routes from "./routes";
import Footer from "./components/footer";
import './index.scss';

const store = configureStore();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  {routes.map(({id, path, element}) => {
                      return <Route path={path} element={element} key={id} />
                  })}
              </Routes>
          </BrowserRouter>
          <Footer />
      </Provider>
  </React.StrictMode>
);
