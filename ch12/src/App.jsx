import { Provider } from 'react-redux'
// import Counter from './NonToolKit/Counter'
// import storeNonTookit from './NonToolKit/store'

// import Counter from './UseToolKit/Counter'
// import storeUseToolkit from './UseToolKit/store'
// import User from './UseToolKit/User'

import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store'

function App() {
   return (
      <Provider store={store}>
         <Counter />
      </Provider>
   )
   // return (
   //    <Provider store={storeNonToolkit}>
   //       <Counter />
   //    </Provider>
   // )
   // return (
   //    <Provider store={storeUseToolkit}>
   //       <Counter />
   //       <User />
   //    </Provider>
   // )
}

export default App
