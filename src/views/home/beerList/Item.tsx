import React from 'react';
import {Box, Grid, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

interface ItemProps {
    allBeers: [];
}

interface beerItem {
    abv: number,
    attenuation_level: number,
    boil_volume: object,
    brewers_tips: string,
    contributed_by: string,
    description: string,
    ebc: number,
    first_brewed: string,
    food_pairing: [],
    ibu: number,
    id: number,
    image_url: string,
    ingredients: object,
    method: object,
    name: string,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number,
    volume: object,
}

function Item(props: ItemProps) {
    const {allBeers} = props;

    const navigate = useNavigate();

    const handleClickBeer = (beerId: number) => {
        navigate(`/beers/${beerId}`);
    }
    
    return (
        <>
            {allBeers.map((item: beerItem) => {
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