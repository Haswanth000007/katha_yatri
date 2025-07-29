import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, Button, Divider } from '@mui/material';

interface Slide {
    images: string[];
    topLeftText: string;
    topRightText: string;
    title: string;
    mainHeading: string;
    subtitles: string[];
    ctaText: string;
}

interface HeroSliderProps {
    slides: Slide[];
    imageChangeInterval?: number;
    slideGap?: number; // Gap between slides in pixels
}

export default function HeroSlider({
    slides,
    imageChangeInterval = 3000,
    slideGap = 40
}: HeroSliderProps) {
    const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
        Array(slides.length).fill(0)
    );

    // Auto-rotate images for each slide
    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];

        slides.forEach((slide, slideIndex) => {
            if (slide.images.length <= 1) return;

            const interval = setInterval(() => {
                setCurrentImageIndices(prev => {
                    const newIndices = [...prev];
                    newIndices[slideIndex] = (newIndices[slideIndex] + 1) % slide.images.length;
                    return newIndices;
                });
            }, imageChangeInterval);

            intervals.push(interval);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, [slides, imageChangeInterval]);

    return (
        <div className="relative w-[96%] mx-auto">
            {/* Vertical slides container */}
            <div className={`flex flex-col gap-[${slideGap}px]`}>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className="relative h-[100vh] w-full"
                        style={{ marginBottom: `${slideGap}px` }}
                    >
                        {/* Background Image for this slide */}
                        <div className="absolute inset-0 z-0 px-8 md:px-16 lg:px-24 overflow-hidden">
                            {slide.images.map((image, imageIndex) => {
                                const isActive = imageIndex === currentImageIndices[slideIndex];

                                return (
                                    <div
                                        key={imageIndex}
                                        className={`absolute inset-0 ${isActive ? 'z-10' : 'z-0'}`}
                                    >
                                        <div
                                            className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                            style={{
                                                transition: 'opacity 1s ease-in-out',
                                                willChange: 'opacity'
                                            }}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${slide.title} ${imageIndex + 1}`}
                                                fill
                                                style={{
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                }}
                                                priority={isActive}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Content for this slide */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-8 md:px-16 lg:px-24 gap-4">
                            {/* First row - Top texts */}
                            <div className="w-full flex flex-col absolute top-8 md:top-12 left-0 px-8 md:px-16 lg:px-24">
                                <div className="flex justify-between w-full">
                                    <Typography variant="h5" sx={{
                                        fontWeight: 800,
                                        fontFamily: "'Aller', sans-serif",
                                        textTransform: 'capitalize',
                                    }}>
                                        {slide.topLeftText}
                                    </Typography>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 800,
                                        fontFamily: "'Mue Sans', sans-serif",
                                        textTransform: 'capitalize',
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
                                        fontFamily: "'Bebas Neue', sans-serif"
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
                                        fontFamily: "'Mue Sans', sans-serif"
                                    }}
                                >
                                    {slide.mainHeading}
                                </Typography>

                                {/* Bullet points */}
                                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12 mb-8">
                                    {slide.subtitles.map((subtitle, index) => (
                                        <div key={index} className="text-center">
                                            <Typography variant="h4" sx={{
                                                fontFamily: "'Mue Sans', sans-serif"
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
                ))}
            </div>
        </div>
    );
}