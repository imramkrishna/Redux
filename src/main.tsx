import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './app/store.ts'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')!).render(
  //calling store in the provider
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


