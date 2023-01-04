import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBeersRequest } from '../../store/beers/actionCreators'
import { Box } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { toast } from 'react-toastify'
import { usePrevious } from '../../hooks/usePrevious'
import BeerList from './beerList'
import TopBar from './topBar'
import Loading from '../../components/loading'

function Home() {
  const dispatch = useDispatch()

  const [page, setPage] = useState<number>(1)
  const [beers, setBeers] = useState<BeerItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isFiltered, setIsFiltered] = useState<boolean>(false)

  const {
    allBeers,
    isGetAllBeersSuccess,
    isGetAllBeersError,
    getAllBeersErrorMessage,
  } = useSelector((state: any) => state.beers)

  const prevIsGetAllBeersSuccess = usePrevious(isGetAllBeersSuccess)
  const prevIsGetAllBeersError = usePrevious(isGetAllBeersError)

  useEffect(() => {
    if (!allBeers.length) {
      dispatch(getAllBeersRequest({ page, per_page: 18 }))
    } else {
      getBeers()
    }
  }, [])

  useEffect(() => {
    if (prevIsGetAllBeersSuccess === false && isGetAllBeersSuccess) {
      getBeers()
    } else if (prevIsGetAllBeersError === false && isGetAllBeersError) {
      setLoading(false)
      toast.error(getAllBeersErrorMessage)
    }
  }, [isGetAllBeersSuccess, isGetAllBeersError])

  const fetchMoreData = () => {
    if (isFiltered) setBeers([])
    setTimeout(() => {
      dispatch(getAllBeersRequest({ page, per_page: 9 }))
    }, 1500)
  }

  const getBeers = () => {
    const pageCount = page === 1 ? 2 : 1
    setPage((prev) => prev + pageCount)
    setBeers((prevState: BeerItem[]) => [...prevState, ...allBeers])
    setIsFiltered(false)
    setLoading(false)
  }

  return (
    <Box id='home'>
      <TopBar setBeers={setBeers} setIsFiltered={setIsFiltered} />
      <InfiniteScroll
        dataLength={beers.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Loading />}
      >
        <BeerList loading={loading} allBeers={beers} />
      </InfiniteScroll>
    </Box>
  )
}

export default Home
