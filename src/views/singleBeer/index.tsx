import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box, TextField, Container, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { toast } from 'react-toastify'
import { getSimilarBeersRequest, getSingleBeerRequest } from '../../store/beers/actionCreators'
import { usePrevious } from '../../hooks/usePrevious'
import CustomButton from '../../components/button'
import SimilarBeers from './SimilarBeers'
import './styles.scss'

const CustomizedTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#CBB27C',
  },
  '& label.MuiInputLabel-root': {
    color: '#CBB27C',
  },
  '& .MuiInput-input': {
    color: '#CBB27C',
  },
  '& .MuiInput-root:before': {
    borderBottomColor: '#CBB27C',
  },
  '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottomColor: '#CBB27C',
  },
})

function SingleBeer() {
  const dispatch = useDispatch()

  const params = useParams()

  const navigate = useNavigate()

  const {
    beer,
    similarBeers,
    isGetSingleBeerSuccess,
    isGetSingleBeerError,
    getSingleBeerErrorMessage,
  } = useSelector((state: any) => state.beers)

  const prevIsGetSingleBeerSuccess = usePrevious(isGetSingleBeerSuccess)
  const prevIsGetSingleBeerError = usePrevious(isGetSingleBeerError)

  const [beerCount, setBeerCount] = useState<number>(1)
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const { id } = params
    if (id) {
      dispatch(getSingleBeerRequest({ id: Number(id) }))
    }

    const localCart = JSON.parse(localStorage.getItem('cart') as string)
    if (localCart) {
      setCart(localCart)
    }
  }, [params?.id])

  useEffect(() => {
    if (prevIsGetSingleBeerSuccess === false && isGetSingleBeerSuccess) {
      if (Object.keys(beer).length) {
        const abv_gt = beer.abv - 1
        const abv_lt = beer.abv + 1
        const ibu_gt = beer.ibu - 10
        const ibu_lt = beer.ibu + 10

        const data = {
          abv_gt: abv_gt >= 0 ? abv_gt : 0,
          abv_lt: abv_lt >= 0 ? abv_lt : 0,
          ibu_gt: ibu_gt >= 0 ? ibu_gt : 0,
          ibu_lt: ibu_lt >= 0 ? ibu_lt : 0,
          id: beer.id,
        }

        if (!similarBeers[beer.id]) {
          dispatch(getSimilarBeersRequest(data))
        }
      }
    } else if (prevIsGetSingleBeerError === false && isGetSingleBeerError) {
      toast.error(getSingleBeerErrorMessage)
    }
  }, [isGetSingleBeerSuccess, isGetSingleBeerError])

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setBeerCount(Number(value))
  }

  const handleAddToCart = (item: BeerItem) => {
    const cartCopy = [...cart]
    const { id } = item
    const existingItem: CartItem | undefined = cartCopy.find(
      (cartItem: CartItem) => cartItem.id === id,
    )

    if (existingItem) {
      existingItem.quantity += beerCount
    } else {
      const data = {
        id: item.id,
        name: item.name,
        image: item.image_url,
        quantity: beerCount,
      }
      cartCopy.push(data)
    }

    setCart(cartCopy)

    const stringCart = JSON.stringify(cartCopy)
    localStorage.setItem('cart', stringCart)
    window.dispatchEvent(new Event('storage'))
    toast.success('Beer was successfully added to the cart.')
  }

  return (
    <Container maxWidth='lg'>
      <Box id='single-beer'>
        <Box className='back-btn'>
          <Button onClick={() => navigate('/')}>
            <KeyboardBackspaceIcon />
          </Button>
        </Box>
        <Grid container spacing={{ xs: 1, md: 3 }} wrap='wrap'>
          <Grid item xs={12} sm={6}>
            <Box
              className='beer-image-box'
              style={{ backgroundImage: `url('${beer.image_url}')` }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className='unit'>330 ml</span>
            <span className='alcohol'>{beer.abv}%</span>
            <p className='name'>{beer.name}</p>
            <p className='description'>{beer.description}</p>
            <p className='price'>$4.75</p>
            <Box className='button-box'>
              <Box className='input-box'>
                <CustomizedTextField
                  fullWidth
                  variant='standard'
                  name='beerCount'
                  value={beerCount}
                  type='number'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCount(e)}
                />
              </Box>
              <Box className='button'>
                <CustomButton
                  title='ADD TO CART'
                  variant='contained'
                  bg='#CBB27C'
                  color='#FFFFFF'
                  onClick={() => handleAddToCart(beer)}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {Object.keys(similarBeers)?.length && similarBeers[beer.id]?.length ? (
          <SimilarBeers similarItems={similarBeers[beer.id]} />
        ) : null}
      </Box>
    </Container>
  )
}

export default SingleBeer
