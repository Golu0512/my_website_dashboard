import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
    return (
        <Stack sx={{ color: 'grey.500', width:'100%', height:'100vh' }}
            spacing={2} 
            direction="row"
            className='d-flex justify-content-center'
        >
            <CircularProgress color="secondary" size='70px' />
            <CircularProgress color="success" size='70px' />
            <CircularProgress color="inherit" size='70px' />
        </Stack>
    );
}