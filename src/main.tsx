import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AntdProvider } from 'src/providers';
import { store } from 'src/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { App } from './App';

import 'antd/dist/reset.css';
import 'src/assets/styles/base/_reset.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <AntdProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </AntdProvider>
      </QueryClientProvider>
    </Provider>
  </Router>,
);
