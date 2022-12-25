import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { JobsProvider } from './context/jobs_context';
import { FilterProvider } from './context/filter_context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <JobsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </JobsProvider>
  </React.StrictMode>,
)
