import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { toast } from 'react-toastify'
import { usePrevious } from '../../hooks/usePrevious'
import './styles.scss'

function Header() {
  const location = useLocation()

  const { beer, isGetSingleBeerSuccess, isGetSingleBeerError, getSingleBeerErrorMessage } =
    useSelector((state: any) => state.beers)

  const prevIsGetSingleBeerSuccess = usePrevious(isGetSingleBeerSuccess)
  const prevIsGetSingleBeerError = usePrevious(isGetSingleBeerError)

  const [cartLength, setCartLength] = useState<number>(0)
  const [title, setTitle] = useState<string>('')

  const getCartLength = () => {
    const cart = JSON.parse(localStorage.getItem('cart') as string)?.length
    setCartLength(cart)
  }

  useEffect(() => {
    if (prevIsGetSingleBeerSuccess === false && isGetSingleBeerSuccess) {
      setTitle(beer.name)
    } else if (prevIsGetSingleBeerError === false && isGetSingleBeerError) {
      toast.error(getSingleBeerErrorMessage)
    }
  }, [isGetSingleBeerSuccess, isGetSingleBeerError])

  useEffect(() => {
    getCartLength()
    window.addEventListener('storage', () => {
      getCartLength()
    })
  }, [])

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('BEER SHOP')
        break
      case '/cart':
        setTitle('BEER CART')
        break
      default:
    }
  }, [location])

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
                <Link to='/cart'>
                  <Box className='cart'>
                    <ShoppingCartIcon />
                    {cartLength === 0
                      ? 'Empty'
                      : cartLength === 1
                      ? `${cartLength} Item`
                      : `${cartLength} Items`}
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth='lg'>
        <Box className='menu-items'>
          <a href='/'>HOME</a>
          <a href='/'>SHOP</a>
          <a href='#'>OUR BEER</a>
          <a href='#'>OUR STORY</a>
          <a href='#'>CONTACT</a>
        </Box>
        <Box className='title-box'>
          <p className='title'>A very warm welcome to our</p>
          <p className='section-title'>{title}</p>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
