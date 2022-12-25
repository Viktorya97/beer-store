import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllBeersRequest} from '../../store/beers/actionCreators';
import {Box} from '@mui/material';
import BeerList from './beerList';

function Home() {
    const dispatch = useDispatch();

    const [page, setPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(18);

    const { allBeers } = useSelector((state: any) => state.beers);

    useEffect(() => {
        dispatch(getAllBeersRequest({page, per_page: offset}))
    }, []);

    return (
        <Box>
            <BeerList allBeers={allBeers} />
        </Box>
    )
}

export default Home