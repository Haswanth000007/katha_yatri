'use client';

import Image from 'next/image';
import HeroSlider from './HeroSlider';

export default function HeroSection() {
    const slides = [
        {
            image: '/images/faith.webp',
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
            image: '/images/trip-image.jpg',
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
            image: '/images/wildlife.webp',
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
            image: '/images/fort.jpg',
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
            image: '/images/humpi.jpg',
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
            image: '/images/food.jpg',
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
            image: '/images/cities.jpg',
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
            image: '/images/hills.jpeg',
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