import * as React from 'react'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import './styles.scss'

export default function Loading() {
  return (
    <Box className='loading-box'>
      <CircularProgress className='progress' />
    </Box>
  )
}
