import React, {useState, useEffect} from 'react';
import {Grid, Box, IconButton} from '@mui/material';

interface productType {
    id: number,
    image: string,
    name: string,
    quantity: number,
}

function Cart() {
    const [cart, setCart] = useState<productType[]>([]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart") as string);
        if (localCart) {
            setCart(localCart)
        }
    }, [])

    const handleRemoveItem = (productId: number) => {

        let cartCopy: productType[] = [...cart]

        cartCopy = cartCopy.filter((item: productType) => item.id !== productId);

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
    }

    const handleEditItem = (productId: number, qty: number) => {

        let cartCopy = [...cart]

        let existentItem = cartCopy.find(item => item.id == productId);

        if (!existentItem) return

        existentItem.quantity += qty;

        if (existentItem.quantity <= 0) {
            cartCopy = cartCopy.filter(item => item.id != productId)
        }

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy);
        localStorage.setItem('cart', cartString);
    }

    return (
        <>
            {
                cart.length ? (
                    cart.map((item: productType) => {
                        return (
                            <Grid container spacing={3} justifyContent='space-between' alignItems='center' key={item.id}>
                                <Grid item xs={12} md={4}>
                                    <Grid container alignItems='center'>
                                        <Grid item xs={6}>
                                            <img src={item.image} alt="beer-image"/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p className='beer-name'>
                                                {item.name}
                                            </p>
                                            <p className='beer-taste'>
                                                Pale Ale
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Grid container alignItems='center'>
                                        <Grid item>{item.quantity}</Grid>
                                        <Grid item>
                                            <IconButton onClick={() => handleRemoveItem(item.id)}>
                                                Remove
                                            </IconButton>
                                        </Grid>
                                        <Grid item>beer price</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                ) : (
                    <Box>
                        There are no cart items
                    </Box>
                )
            }
        </>
    );
}

export default Cart;