import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Contador from './components/contador'; 
import reducer from './components/contador/reducer';

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Contador />
  </Provider>
)

export default App