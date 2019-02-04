import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Contador from './components/contador'; 
import rootReducer from './rootReducer';

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Contador />
  </Provider>
)

export default App