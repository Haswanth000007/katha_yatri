"use client";
import React from 'react';
import {
    Toolbar,
    Typography,
    IconButton,
    Stack,
    Link,
    AppBar // Added AppBar for fixed positioning
} from '@mui/material';
import {
    Phone as PhoneIcon,
    Email as EmailIcon,
    Instagram as InstagramIcon,
    Facebook as FacebookIcon
} from '@mui/icons-material';

const TopBar = () => {
    // Social media links
    const socialLinks = {
        instagram: 'https://www.instagram.com/kathayatri?igsh=NTliMWZ4bHJwMXhp',
        facebook: 'https://facebook.com'
    };

    // Contact information
    const contactInfo = {
        phone: '+91 6300 842 936',
        email: 'kathayatri1@gmail.com'
    };

    return (
        <AppBar
            position="fixed" // This makes the bar fixed at top
            sx={{
                backgroundColor: 'black',
                color: 'white',
                boxShadow: 'none', // Optional: removes shadow if you prefer
                zIndex: (theme) => theme.zIndex.drawer + 1 // Ensures it stays above other content
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '64px !important',
                    padding: '0 24px',
                    '@media (max-width: 600px)': {
                        padding: '0 12px'
                    }
                }}
            >
                {/* Rest of your existing Toolbar content remains the same */}
                {/* Left side - Contact info */}
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                        alignItems: 'center'
                    }}
                >
                    {/* Phone */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <PhoneIcon fontSize="small" />
                        <Typography variant="body2" component="span">
                            {contactInfo.phone}
                        </Typography>
                    </Stack>

                    {/* Email */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon fontSize="small" />
                        <Typography variant="body2" component="span">
                            {contactInfo.email}
                        </Typography>
                    </Stack>
                </Stack>

                {/* Right side - Social media */}
                <Stack direction="row" spacing={1}>
                    {/* Instagram */}
                    <IconButton
                        size="small"
                        color="inherit"
                        component={Link}
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon fontSize="small" />
                    </IconButton>

                    {/* Facebook */}
                    <IconButton
                        size="small"
                        color="inherit"
                        component={Link}
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;