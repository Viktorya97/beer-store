import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import configureStore from './store/index'
import Footer from './components/footer'
import Header from './components/header'
import './index.scss'

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  </Provider>,
)
