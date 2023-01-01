import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import './styles.scss'

function Header() {
  const [cartLength, setCartLength] = useState<number | null>(null)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') as string)?.length
    setCartLength(cart)
  }, [])

  return (
    <Box id='header'>
      <Box className='header-items'>
        <Container maxWidth='lg'>
          <Box className='items'>
            <Box className='left-items'>
              <Box>
                <a href='#'>
                  <InstagramIcon />
                </a>
              </Box>
              <Box>
                <a href='#'>
                  <FacebookIcon />
                </a>
              </Box>
              <Box>
                <a href='#'>
                  <TwitterIcon />
                </a>
              </Box>
            </Box>
            <Box className='right-items'>
              <Box>
                <a href='#'>
                  <Box className='beer-locations'>
                    <LocationOnIcon />
                    Find our beer
                  </Box>
                </a>
              </Box>
              <Box>
                <a href='/cart'>
                  <Box className='cart'>
                    <ShoppingCartIcon />
                    {cartLength} item
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth='lg'>
        <Box className='menu-items'>
          <a href='#'>HOME</a>
          <a href='#'>SHOP</a>
          <a href='#'>OUR BEER</a>
          <a href='#'>OUR STORY</a>
          <a href='#'>CONTACT</a>
        </Box>
        <Box className='title-box'>
          <p className='title'>A very warm welcome to our</p>
          <p className='section-title'>Beer Shop</p>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
