import React from 'react';
import {Box} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.scss';

function Header() {
    return (
        <Box id="header">
            <Box className='items'>
                <Box className='left-items' />
                <Box className='right-items'>
                    <Box className='beer-locations'>
                        <a href='#'>
                             <span>
                                <LocationOnIcon />
                             </span>
                            Find our beer
                        </a>
                    </Box>
                    <Box className='cart'>
                        <a href="/cart">
                            <span>
                                <ShoppingCartIcon style={{ color: '#FFFFFF' }} />
                            </span>
                            1 item
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;