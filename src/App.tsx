// App.tsx

import PublicRoute from '@components/PublicRoute'
// import CustomerPage from '@pages/CustomerPage'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Customer = lazy(() => import('@features/Customer/Customer'))
const CustomerPage = lazy(() => import('@pages/CustomerPage'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/customers' element={<PublicRoute element={<CustomerPage />} />} />
          <Route path='/customers/:id' element={<PublicRoute element={<Customer />} />} />
          <Route path='*' element={<PublicRoute element={<CustomerPage />} />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
