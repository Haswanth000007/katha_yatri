'use client';

import { Button, Typography, Divider, IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { useState, useEffect, useCallback } from 'react';

interface HeroSlide {
    images: string[]; // Array of images for this slide
    title: string;
    subtitles: string[];
    topLeftText: string;
    topRightText: string;
    mainHeading: string;
    ctaText: string;
}

interface HeroSliderProps {
    slides: HeroSlide[];
    imageChangeInterval?: number; // Optional interval in milliseconds (default: 3000)
}

export default function HeroSlider({ slides, imageChangeInterval = 3000 }: HeroSliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [transitionDirection, setTransitionDirection] = useState<'up' | 'down'>('up');

    const slide = slides[currentSlide];

    // Handle slide navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setCurrentImageIndex(0); // Reset image index when changing slides
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setCurrentImageIndex(0); // Reset image index when changing slides
    }, [slides.length]);

    // Auto-rotate images for the current slide
    useEffect(() => {
        if (slide.images.length <= 1) return; // No need to rotate if only one image

        const interval = setInterval(() => {
            setTransitionDirection('up');
            setCurrentImageIndex((prev) => (prev + 1) % slide.images.length);
        }, imageChangeInterval);

        return () => clearInterval(interval);
    }, [slide.images.length, imageChangeInterval]);

    // Handle manual image navigation (optional)
    const nextImage = () => {
        setTransitionDirection('up');
        setCurrentImageIndex((prev) => (prev + 1) % slide.images.length);
    };

    const prevImage = () => {
        setTransitionDirection('down');
        setCurrentImageIndex((prev) => (prev - 1 + slide.images.length) % slide.images.length);
    };

    return (
        <div className="relative w-[96%] h-[94vh] overflow-hidden mx-auto flex justify-center">
            {/* Navigation Arrows */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                }}
            >
                <ArrowLeft fontSize="large" />
            </IconButton>

            <IconButton
                onClick={nextSlide}
                sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                }}
            >
                <ArrowRight fontSize="large" />
            </IconButton>

            {/* Background Images Container */}
            <div className="absolute inset-0 z-0 px-8 md:px-16 lg:px-24 overflow-hidden">
                {slide.images.map((image, index) => {
                    const isActive = index === currentImageIndex;
                    const isNext = index === (currentImageIndex + 1) % slide.images.length;
                    const isPrevious = index === (currentImageIndex - 1 + slide.images.length) % slide.images.length;

                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-2000 ease-[cubic-bezier(0.65,0,0.35,1)] ${isActive
                                ? 'opacity-100 clip-path-[inset(0%_0_0%_0)]' // Fully visible
                                : isNext
                                    ? 'opacity-100 clip-path-[inset(0%_0_100%_0)]' // Waiting to enter (hidden at bottom)
                                    : 'opacity-100 clip-path-[inset(100%_0_0%_0)]' // Exiting (revealing from top)
                                }`}
                            style={{
                                transitionProperty: 'clip-path, opacity',
                                willChange: 'clip-path, opacity',
                                clipPath: isActive
                                    ? 'inset(0% 0 0% 0)' // Fully visible
                                    : isNext
                                        ? 'inset(0% 0 100% 0)' // New image starts hidden at bottom
                                        : 'inset(100% 0 0% 0)' // Old image exits from top
                            }}
                        >
                            <Image
                                src={image}
                                alt={`${slide.title} ${index + 1}`}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                                priority={isActive}
                            />
                            <div className="absolute inset-0 bg-opacity-30" />
                        </div>
                    );
                })}
            </div>

            {/* Content (unchanged from your original) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-8 md:px-16 lg:px-24 gap-4">
                {/* First row - Top texts */}
                <div className="w-full flex flex-col absolute top-8 md:top-12 left-0 px-8 md:px-16 lg:px-24">
                    <div className="flex justify-between w-full">
                        <Typography variant="h5" sx={{
                            fontWeight: 700,
                            fontFamily: "'Aller', sans-serif" // Aller Bold for topLeftText
                        }}>
                            {slide.topLeftText}
                        </Typography>
                        <Typography variant="h5" sx={{
                            fontWeight: 700,
                            fontFamily: "'Mue Sans', sans-serif" // Mue Sans for topRightText
                        }}>
                            {slide.topRightText}
                        </Typography>
                    </div>
                    <Divider
                        sx={{
                            backgroundColor: 'white',
                            height: 2,
                            width: '100%',
                            my: 1
                        }}
                    />
                </div>

                {/* Second row - Title with divider */}
                <div className="w-full absolute top-24 md:top-32 left-0 px-8 md:px-16 lg:px-24">
                    <Typography
                        variant="h3"
                        component="h2"
                        className="text-4xl md:text-6xl font-black tracking-tight"
                        sx={{
                            fontWeight: 800,
                            fontFamily: "'Bebas Neue', sans-serif" // Bebas Neue for title
                        }}
                    >
                        {slide.title}
                    </Typography>
                    <Divider
                        sx={{
                            backgroundColor: 'white',
                            height: 2,
                            width: '100%',
                            my: 1
                        }}
                    />
                </div>

                {/* Center content */}
                <div className="text-center flex flex-col items-center gap-4">
                    {/* Main heading */}
                    <Typography
                        variant="h1"
                        component="h1"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        sx={{
                            fontFamily: "'Mue Sans', sans-serif" // Mue Sans for mainHeading
                        }}
                    >
                        {slide.mainHeading}
                    </Typography>

                    {/* Bullet points */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12 mb-8">
                        {slide.subtitles.map((subtitle, index) => (
                            <div key={index} className="text-center">
                                <Typography variant="h4" sx={{
                                    fontFamily: "'Mue Sans', sans-serif" // Mue Sans for subtitles
                                }}>{subtitle}</Typography>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{
                            borderRadius: '9999px',
                            paddingX: 4,
                            paddingY: 1.5,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            backgroundColor: '#E63946',
                            fontFamily: "'Mue Sans', sans-serif",
                            '&:hover': {
                                backgroundColor: '#d62839',
                            },
                        }}
                    >
                        {slide.ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
}