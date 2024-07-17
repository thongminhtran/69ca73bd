import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import './css/header.css';

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" className="icon">
                    <PhoneIcon />
                </IconButton>
                <Typography variant="h6">
                    Activity
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
