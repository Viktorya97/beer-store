import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, TextField, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import dayjs, { Dayjs } from 'dayjs'
import { toast } from 'react-toastify'
import { getBeersByBrewedRequest } from '../../../store/beers/actionCreators'
import { usePrevious } from '../../../hooks/usePrevious'
import FilterDrawer from './FilterDrawer'
import { TODAY } from '../../../utils/constants'
import './styles.scss'

interface TopBarProps {
  setBeers: Function
  setIsFiltered: Function
}

const CustomizedTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#FFFFFF',
  },
  '& label.MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '& .MuiOutlinedInput-input': {
    color: '#FFFFFF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFFFFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFFFFF',
    },
    '&:hover fieldset': {
      borderColor: '#FFFFFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF',
    },
  },
})

function TopBar(props: TopBarProps) {
  const { setBeers, setIsFiltered } = props

  const dispatch = useDispatch()

  const {
    allBeers,
    filteredByBrewedData,
    isGetFilteredByBrewedSuccess,
    isGetFilteredByBrewedError,
    getFilteredByBrewedErrorMessage,
  } = useSelector((state: any) => state.beers)

  const prevIsGetFilteredByBrewedSuccess = usePrevious(isGetFilteredByBrewedSuccess)
  const prevIsGetFilteredByBrewedError = usePrevious(isGetFilteredByBrewedError)

  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState<boolean>(false)
  const [beforeDate, setBeforeDate] = useState<Dayjs | null>(TODAY)
  const [afterDate, setAfterDate] = useState<Dayjs | null>(TODAY)

  useEffect(() => {
    if (prevIsGetFilteredByBrewedSuccess === false && isGetFilteredByBrewedSuccess) {
      setBeers(filteredByBrewedData)
      setIsOpenFilterDrawer(false)
    } else if (prevIsGetFilteredByBrewedError === false && isGetFilteredByBrewedError) {
      toast.error(getFilteredByBrewedErrorMessage)
    }
  }, [isGetFilteredByBrewedSuccess, isGetFilteredByBrewedError])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (!searchValue) {
      setBeers(allBeers)
    } else {
      const filtered = allBeers.filter((beer: BeerItem) =>
        beer.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
      )
      setBeers(filtered)
    }
  }

  const toggleDrawer = () => {
    setIsOpenFilterDrawer(!isOpenFilterDrawer)
    setBeforeDate(TODAY)
    setAfterDate(TODAY)
  }

  const handleFilter = () => {
    setIsFiltered(true)
    dispatch(
      getBeersByBrewedRequest({
        brewed_before: dayjs(beforeDate).format('MM-YYYY'),
        brewed_after: dayjs(afterDate).format('MM-YYYY'),
      }),
    )
  }

  return (
    <Box id='top-bar'>
      <Container maxWidth='lg'>
        <Box className='sub-header'>
          <Box className='menu-items'>
            <a href='#'>ALL</a>
            <a href='#'>LATEST</a>
            <a href='#'>FEATURED</a>
            <a href='#'>SALE</a>
          </Box>
          <Box className='filter-box'>
            <Box className='search-box'>
              <CustomizedTextField
                label='Search'
                type='search'
                id='custom-css-outlined-input'
                size='small'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
              />
            </Box>
            <Box className='filter-btn'>
              <Button onClick={toggleDrawer}>
                Filter options
                <FilterAltIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <FilterDrawer
        isOpenFilterDrawer={isOpenFilterDrawer}
        toggleDrawer={toggleDrawer}
        setBeforeDate={setBeforeDate}
        beforeDate={beforeDate}
        setAfterDate={setAfterDate}
        afterDate={afterDate}
        handleFilter={handleFilter}
      />
    </Box>
  )
}

export default TopBar
