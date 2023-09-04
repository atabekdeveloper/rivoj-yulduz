import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AntdProvider } from 'src/providers';
import { store } from 'src/store';

import { App } from './App';

import 'antd/dist/reset.css';
import 'src/assets/styles/base/_reset.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <AntdProvider>
        <App />
      </AntdProvider>
    </Provider>
  </Router>,
);
