'use client';

import Image from 'next/image';
import HeroSlider from './HeroSlider';

export default function HeroSection() {
    const slides = [
        {
            images: [
                '/images/Faith_and_Spirituality/faith.webp',
                '/images/Lavish_Landscapes/trip-image.jpg',
                '/images/Wonderful_Wildlife/wildlife.webp'
            ],
            title: 'Katha Yatri',
            subtitles: [
                'Temples, Masjid',
                'Meditative Experiences',
                'Fabulous Festivals'
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Faith and Spirituality',
            ctaText: 'View Collection'
        },
        {
            images: [
                '/images/Lavish_Landscapes/trip-image.jpg',
                '/images/Lavish_Landscapes/one.jpeg',
                '/images/Lavish_Landscapes/two.jpeg'
            ],
            title: 'Katha Yatri',
            subtitles: [
                'ladakh Lunar',
                'Blissful Beaches',
                'Drifting Deserts',
                'Mountains'
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Lavish Landscapes',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/Wonderful_Wildlife/wildlife.webp'],
            title: 'Katha Yatri',
            subtitles: [
                'Mountains'
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Wonderful Wildlife',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/Magnificent_Monuments/fort.jpg'],
            title: 'Katha Yatri',
            subtitles: [
                'Taj Mahal',
                'Fantastic Forts',
                'Supersized statues',
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Magnificent Monuments',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/Lost_Civilizations/humpi.jpg'],
            title: 'Katha Yatri',
            subtitles: [
                'Humbliing Hampi',
                'seductive Khajunaho',
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Lost Civilizations',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/Meals_of_a_Lifetime/food.jpg'],
            title: 'Katha Yatri',
            subtitles: [
                'Delicious Food',
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Meals of a Lifetime',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/Spectacular_Cities/cities.jpg'],
            title: 'Katha Yatri',
            subtitles: [
                'Magical Cities',
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: 'Spectacular Cities',
            ctaText: 'View Collection'
        },
        {
            images: ['/images/AfterMath_of_a_Empire/hills.jpeg'],
            title: 'Katha Yatri',
            subtitles: [
                'Indias Hill stations',
                'Rajera Delhi',
                'independence Heroes'
            ],
            topLeftText: 'India wears its soul on its sleeves',
            topRightText: 'Athidhi Devo Bhava',
            mainHeading: ' AfterMath of a Empire',
            ctaText: 'View Collection'
        },
        // Add more slides as needed
    ];
    return (
        <main>
            <HeroSlider slides={slides} />
        </main>
    );
}