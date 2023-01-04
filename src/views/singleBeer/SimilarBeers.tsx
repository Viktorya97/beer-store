import React from 'react'
import { Box, Grid } from '@mui/material'
import CustomButton from '../../components/button'
import { useNavigate } from 'react-router-dom'

interface SimilarBeersProps {
  similarItems: BeerItem[]
}

function SimilarBeers(props: SimilarBeersProps) {
  const { similarItems } = props

  const navigate = useNavigate()

  const handleClickBeer = (beerId: number) => {
    navigate(`/beers/${beerId}`)
  }

  return (
    <Box className='similar-beers-box'>
      <p className='title'>Similar products</p>
      <Grid container spacing={{ xs: 2, md: 3 }} wrap='wrap'>
        {similarItems?.map((item: BeerItem) => {
          return (
            <Grid item xs={12} sm={4} md={4} key={item.id}>
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
        })}
      </Grid>
    </Box>
  )
}

export default SimilarBeers
