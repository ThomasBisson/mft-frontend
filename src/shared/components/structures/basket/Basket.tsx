import { Backdrop } from '@mui/material';
import * as React from 'react';

export default function Basket() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
        >
            <div>aaa</div>
        </Backdrop>
    )
}