import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleBeerRequest} from '../../store/beers/actionCreators';
import {useParams} from 'react-router-dom';
import {Grid, Box, TextField} from '@mui/material';
import CustomButton from '../../components/button';
import './styles.scss';

interface productItem {
    id: number,
    image: string,
    name: string,
    quantity: number,
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
    quantity: number,
}

function SingleBeer() {
    const dispatch = useDispatch();

    const params = useParams();

    const { beer } = useSelector((state: any) => state.beers);

    const [beerCount, setBeerCount] = useState<number>(1);
    const [cart, setCart] = useState<productItem[]>([])

    useEffect(() => {
        const { id } = params;
        if (id) {
            dispatch(getSingleBeerRequest({id: Number(id)}))
        }

        const localCart = JSON.parse(localStorage.getItem('cart') as string);
        if (localCart) {
            setCart(localCart)
        }
    }, []);

    const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setBeerCount(Number(value));
    }

    const handleAddToCart = (item: beerItem) => {
        const cartCopy = [...cart];
        const {id} = item;
        const existingItem: productItem | undefined = cartCopy.find((cartItem: productItem) => cartItem.id === id);

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

        const stringCart = JSON.stringify(cartCopy);
        localStorage.setItem('cart', stringCart)
    }

    return (
        <Box id='single-beer'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Box className='beer-image-box'>
                        <img src={beer.image_url} alt='beer' className='beer-image' />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <span className='unit'>330 ml</span>
                    <span className='alcohol'>{beer.abv}%</span>
                    <p className='name'>{beer.name}</p>
                    <p className='description'>
                        {beer.description}
                    </p>
                    <p className='price'>
                        $4.75
                    </p>
                    <Box className='button-box'>
                        <Box className='input-box'>
                            <TextField
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
        </Box>
    );
}

export default SingleBeer;