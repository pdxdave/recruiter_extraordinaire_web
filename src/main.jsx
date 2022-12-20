import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { JobsProvider } from './context/jobs_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </React.StrictMode>,
)
