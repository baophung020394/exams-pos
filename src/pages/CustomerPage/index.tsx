import CustomerList from '@features/Customer/CustomerList'
import { Box } from '@mui/material'
import React from 'react'

const CustomerPage: React.FC = () => {
  return (
    <Box className='customer-page'>
      <CustomerList />
    </Box>
  )
}

export default CustomerPage
