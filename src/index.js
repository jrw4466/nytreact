import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Search from './components/search';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// let modals = (
//   <div>
//     <App />
//     <Search />
//   </div>
// );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
  </Provider>
, document.querySelector('.container'));

