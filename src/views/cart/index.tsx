import React, {useState, useEffect} from 'react';
import {Grid, Box, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './styles.scss';

function Cart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart") as string);
        if (localCart) {
            setCart(localCart)
        }
    }, [])

    const handleRemoveItem = (productId: number) => {
        let cartCopy: CartItem[] = [...cart]
        cartCopy = cartCopy.filter((item: CartItem) => item.id !== productId);
        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
    }

    const handleEditItem = (productId: number, isIncrement: boolean) => {

        let cartCopy = [...cart]

        let existentItem = cartCopy.find(item => item.id == productId);

        if (!existentItem) return

        if (isIncrement) {
            existentItem.quantity += 1;
        } else {
            existentItem.quantity -= 1;
        }

        if (existentItem.quantity <= 0) {
            cartCopy = cartCopy.filter(item => item.id != productId)
        }

        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy);
        localStorage.setItem('cart', cartString);
    }

    return (
        <Box id='cart'>
            {cart.length ? (
                    cart.map((item: CartItem) => {
                        return (
                            <Grid container spacing={3} justifyContent='space-between' alignItems='center' key={item.id}>
                                <Grid item xs={12} md={4}>
                                    <Grid container alignItems='center'>
                                        <Grid item xs={6}>
                                            <img src={item.image} alt="beer-image" className='image' />
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
                                    <Grid container justifyContent='space-around' alignItems='center'>
                                        <Grid item>
                                            <Box className='inc-dec-box'>
                                                <Box>
                                                    <IconButton
                                                        className='decrement-btn'
                                                        onClick={() => handleEditItem(item.id, false)}
                                                    >
                                                        <KeyboardArrowDownIcon />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    {item.quantity}
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                        className="increment-btn"
                                                        onClick={() => handleEditItem(item.id, true)}
                                                    >
                                                        <KeyboardArrowUpIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={() => handleRemoveItem(item.id)}>
                                                <ClearIcon className='delete-icon' />
                                            </IconButton>
                                        </Grid>
                                        <Grid item>$4.75</Grid>
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
        </Box>
    );
}

export default Cart;