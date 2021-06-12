import React ,{Component} from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import Router from './src/router'
import { PersistGate } from 'redux-persist/integration/react'


//merging screens ( which need to access store) using persistor gate
// store implementation
class App extends Component {
  render(){
    return(
      <Provider store= {store}>
        <PersistGate persistor= {persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    )
  }
}

export default App