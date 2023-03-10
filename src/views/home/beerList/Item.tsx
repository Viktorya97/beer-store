import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import CustomButton from '../../../components/button'

interface ItemProps {
  allBeers: BeerItem[]
}

function Item(props: ItemProps) {
  const { allBeers } = props

  const navigate = useNavigate()

  const handleClickBeer = (beerId: number) => {
    navigate(`/beers/${beerId}`)
  }

  return (
    <>
      {allBeers.length ? (
        allBeers.map((item: BeerItem) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box className='view-item-box'>
                <Box className='beer-item'>
                  <img src={item.image_url} alt='beer' className='beer-image' />
                  <p className='beer-name'>{item.name}</p>
                  <p className='beer-price'>$4.75</p>
                </Box>
                <Box className='overlay'>
                  <CustomButton
                    title='VIEW'
                    variant='contained'
                    bg='#CBB27C'
                    color='#FFFFFF'
                    onClick={() => handleClickBeer(item.id)}
                  />
                </Box>
              </Box>
            </Grid>
          )
        })
      ) : (
        <Box className='no-data-text'>There are no products</Box>
      )}
    </>
  )
}

export default Item
