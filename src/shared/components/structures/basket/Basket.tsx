import * as React from 'react';
import { Backdrop, Box, IconButton, Stack, Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux-hooks';
import { selectBasketNeedToOpen, close } from '../../../store/basketSlice';
import { Close } from '@mui/icons-material';

export default function Basket() {
    const dispatch = useAppDispatch();
    const needToOpen = useAppSelector(selectBasketNeedToOpen);

    const handleClose = () => {
        console.log('on close');
        dispatch(close());
    };

    return (
        <Backdrop
            sx={ (theme) => ({ color: 'black', zIndex: theme.zIndex.drawer + 1, display: 'flex', justifyContent: 'end' })}
            open={needToOpen}
            onClick={handleClose}
        >
            <Box sx={{width: '400px', height: '100%', backgroundColor: '#fff'}}>
               <Box p='10px'>
                    {/* // Header */}
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography>Mon panier</Typography>
                        <IconButton>
                            <Close />
                        </IconButton>
                    </Stack>
               </Box>
            </Box>
        </Backdrop>
    )
}