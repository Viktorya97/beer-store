import React from 'react';
import {Box, Grid, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

interface ItemProps {
    allBeers: BeerItem[];
}

function Item(props: ItemProps) {
    const {allBeers} = props;

    const navigate = useNavigate();

    const handleClickBeer = (beerId: number) => {
        navigate(`/beers/${beerId}`);
    }
    
    return (
        <>
            {allBeers.map((item: BeerItem) => {
                return (
                    <Grid item xs={2} sm={4} md={4} key={item.id}>
                        <Box className='beer-item'>
                            <Button onClick={() => handleClickBeer(item.id)}>
                                <img src={item.image_url} alt='beer' className='beer-image' />
                            </Button>
                            <p className='beer-name'>
                                {item.name}
                            </p>
                            <p className='beer-price'>
                                $4.75
                            </p>
                        </Box>
                    </Grid>
                )
            })
            }
        </>
    );
}

export default Item;