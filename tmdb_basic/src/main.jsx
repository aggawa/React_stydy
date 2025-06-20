import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // 1. import 시키기
import { Provider } from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root')).render(
   // <StrictMode>
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
   // </StrictMode>
)
// 2. BrowserRouter로 감싸주기
// 라우터 사용을 위함임
