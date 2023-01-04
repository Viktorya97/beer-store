import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Item from './Item'
import '../styles.scss'

interface BeerListProps {
  allBeers: BeerItem[]
  loading: boolean
}

function BeerList(props: BeerListProps) {
  const { allBeers, loading } = props

  return (
    <>
      {!loading && (
        <Container maxWidth='lg'>
          <Box id='beer-list'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} wrap='wrap'>
                <Item allBeers={allBeers} />
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </>
  )
}

export default BeerList
