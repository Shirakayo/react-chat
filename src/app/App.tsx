import './style/index.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from '@/pages'
import { store } from '@/store'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  )
}
