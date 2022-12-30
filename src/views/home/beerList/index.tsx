import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item';
import '../styles.scss';

interface BeerListProps {
    allBeers: BeerItem[];
}

function BeerList(props: BeerListProps) {
    const { allBeers } = props;

    return (
        <Box id='beer-list'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Item allBeers={allBeers} />
                </Grid>
            </Box>
        </Box>
    );
}

export default BeerList;