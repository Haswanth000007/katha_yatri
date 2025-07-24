'use client';

import { Button, Typography, Divider, IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { useState } from 'react';

interface HeroSlide {
    image: string;
    title: string;
    subtitles: string[];
    topLeftText: string;
    topRightText: string;
    mainHeading: string;
    ctaText: string;
}

interface HeroSliderProps {
    slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

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

            {/* Background Image */}
            <div className="absolute inset-0 z-0 px-8 md:px-16 lg:px-24 bg-opacity-50">
                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-8 md:px-16 lg:px-24 gap-4">
                {/* First row - Top texts */}
                <div className="w-full flex flex-col absolute top-8 md:top-12 left-0 px-8 md:px-16 lg:px-24">
                    <div className="flex justify-between w-full">
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {slide.topLeftText}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
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
                        sx={{ fontWeight: 800 }}
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
                    >
                        {slide.mainHeading}
                    </Typography>

                    {/* Bullet points */}
                    <div className="flex flex-col md:flex-row j ustify-center gap-4 md:gap-8 lg:gap-12 mb-8">
                        {slide.subtitles.map((subtitle, index) => (
                            <div key={index} className="text-center">
                                <Typography variant="h4">{subtitle}</Typography>
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