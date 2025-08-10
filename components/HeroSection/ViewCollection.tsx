"use client"
import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Paper,
    Container,
    Divider,
    useTheme,
    Toolbar
} from '@mui/material';
import Image from 'next/image';
import { BookingModal } from './BookingModal';

interface CollectionViewProps {
    collectionProps: {
        images: string[];
        names: string[];
        mainHeading: string;
        exploreContent: string[];
        packageDetails: string[];
        priceValue: string;
        booking: string;
    };
}
const contactDetails = {
    phone: '+91 6300 842 936',
    email: 'kathayatri1@gmail.com',
    whatsapp: '+91 6300 842 936'
};
export const CollectionView: React.FC<CollectionViewProps> = ({ collectionProps }) => {
    const [expanded, setExpanded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const [openBookingModal, setOpenBookingModal] = useState(false);
    useEffect(() => {
        if (collectionProps.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % collectionProps.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [collectionProps.images.length]);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: expanded ? 'auto' : '100vh-(64px)',
                minHeight: '100vh',
                overflow: 'hidden',
                transition: 'height 0.5s ease',
            }}
        >
            <Button
                variant="outlined"
                onClick={() => window.history.back()}
                sx={{
                    position: 'fixed',
                    top: 94,
                    left: 24,
                    zIndex: 1,
                    borderRadius: '50%',
                    minWidth: 48,
                    width: 48,
                    height: 48,
                    color: 'white',
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: 'darkgray',
                    },
                }}
            >
                ←
            </Button>
            {/* Main Image Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: expanded ? '70vh' : '100vh',
                    transition: 'height 0.5s ease',
                    px: { xs: 2, md: 4, lg: 6 },
                    overflow: 'hidden',
                }}
            >
                {/* Image Container with Transition Effect */}
                <Box className="absolute inset-0 z-0">
                    {collectionProps.images.map((image, imageIndex) => {
                        const isActive = imageIndex === currentIndex;

                        return (
                            <Box
                                key={imageIndex}
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: isActive ? 10 : 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                        willChange: 'opacity',
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt={`Collection image ${imageIndex + 1}`}
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                        priority={isActive}
                                    />
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        mt: 6,
                        width: '100%',
                        px: { xs: 2, md: 4, lg: 6 },
                    }}
                >
                    {/* Main Heading Button */}
                    <Button
                        variant="contained"
                        size="large"
                        onClick={toggleExpand}
                        sx={{
                            px: 6,
                            py: 2,
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    >
                        {collectionProps.mainHeading}
                    </Button>

                    {/* Current Location Name */}
                    {collectionProps.names.length > 0 && (
                        <Paper
                            elevation={6}
                            sx={{
                                px: 4,
                                py: 2,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                borderRadius: 2,
                                maxWidth: '90%',
                            }}
                        >
                            <Typography variant="h5">
                                {collectionProps.names[currentIndex % collectionProps.names.length]}
                            </Typography>
                        </Paper>
                    )}
                </Box>
            </Box>

            {/* Expanded Content Section */}
            {expanded && (
                <Container
                    maxWidth="xl"
                    sx={{
                        py: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6, // Increased gap between sections
                    }}
                >

                    {/* Main Heading */}
                    {/* <Box textAlign="center" sx={{ mb: 4 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={toggleExpand}
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                borderWidth: 3,
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.dark,
                                '&:hover': {
                                    borderWidth: 3,
                                    backgroundColor: theme.palette.primary.light,
                                },
                            }}
                        >
                            Package details
                        </Button>
                    </Box> */}

                    {/* Content Columns */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 6, // Increased gap between papers
                        }}
                    >
                        {/* Explore Content Paper - Enhanced */}
                        <Paper
                            elevation={8}
                            sx={{
                                flex: 1,
                                p: 5,
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 3,
                                borderLeft: `6px solid ${theme.palette.primary.main}`,
                                boxShadow: `0 10px 20px rgba(0,0,0,0.1)`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: `0 15px 25px rgba(0,0,0,0.15)`,
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.primary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.primary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    1
                                </Box>
                                Explore Benefits
                            </Typography>
                            <Divider sx={{
                                my: 3,
                                borderColor: theme.palette.primary.light,
                                borderWidth: 1,
                            }} />
                            <Box
                                component="ul"
                                sx={{
                                    pl: 0,
                                    maxHeight: 300,
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        width: 6,
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: theme.palette.primary.light,
                                        borderRadius: 3,
                                    },
                                }}
                            >
                                {collectionProps.exploreContent.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="li"
                                        sx={{
                                            mb: 2.5,
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: theme.palette.grey[50],
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.light + '20',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: 24,
                                                height: 24,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            {index + 1}
                                        </Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>

                        {/* Package Details Paper - Enhanced */}
                        <Paper
                            elevation={8}
                            sx={{
                                flex: 1,
                                p: 5,
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 3,
                                borderLeft: `6px solid ${theme.palette.secondary.main}`,
                                boxShadow: `0 10px 20px rgba(0,0,0,0.1)`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: `0 15px 25px rgba(0,0,0,0.15)`,
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.secondary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.secondary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    2
                                </Box>
                                Package Details
                            </Typography>
                            <Divider sx={{
                                my: 3,
                                borderColor: theme.palette.secondary.light,
                                borderWidth: 1,
                            }} />
                            <Box
                                component="ul"
                                sx={{
                                    pl: 0,
                                    maxHeight: 300,
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        width: 6,
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: theme.palette.secondary.light,
                                        borderRadius: 3,
                                    },
                                }}
                            >
                                {collectionProps.packageDetails.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="li"
                                        sx={{
                                            mb: 2.5,
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: theme.palette.grey[50],
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: theme.palette.secondary.light + '20',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: 24,
                                                height: 24,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.secondary.main,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            {index + 1}
                                        </Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Box>

                    {/* Price and Booking Section - Enhanced */}
                    <Paper
                        elevation={8}
                        sx={{
                            mt: 4,
                            p: 4,
                            backgroundColor: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.grey[50]} 100%)`,
                            borderRadius: 3,
                            borderTop: `4px solid ${theme.palette.success.main}`,
                            boxShadow: `0 8px 20px rgba(0,0,0,0.08)`,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 4,
                            }}
                        >
                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 1,
                                    }}
                                >
                                    Special Offer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.success.dark,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            fontSize: '2rem',
                                            lineHeight: 1,
                                        }}
                                    >
                                        {collectionProps.priceValue.split(' ')[0]}
                                    </Box>
                                    {collectionProps.priceValue.split(' ').slice(1).join(' ')}
                                </Typography>
                            </Box>
                            <BookingModal
                                open={openBookingModal}
                                onClose={() => setOpenBookingModal(false)}
                                contactDetails={contactDetails}
                            />
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => setOpenBookingModal(true)}
                                sx={{
                                    px: 8,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    backgroundColor: theme.palette.success.main,
                                    borderRadius: 50,
                                    boxShadow: `0 4px 12px ${theme.palette.success.main}50`,
                                    '&:hover': {
                                        backgroundColor: theme.palette.success.dark,
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 6px 16px ${theme.palette.success.main}70`,
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {collectionProps.booking}
                            </Button>
                        </Box>

                    </Paper>
                </Container>
            )}
        </Box>
    );
};