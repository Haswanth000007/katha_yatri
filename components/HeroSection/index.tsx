'use client';

import Image from 'next/image';
import HeroSlider from './HeroSlider';

export default function HeroSection() {
    const slides = [
        {
            images: [
                '/images/Faith_and_Spirituality/faith.webp',
                '/images/Faith_and_Spirituality/three.JPG',
                '/images/Faith_and_Spirituality/two.JPG'
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
                '/images/Lavish_Landscapes/five.jpg',
                '/images/Lavish_Landscapes/four.jpg',
                '/images/Lavish_Landscapes/one.jpeg',
                '/images/Lavish_Landscapes/three.jpg',
                '/images/Lavish_Landscapes/trip-image.jpg',
                '/images/Lavish_Landscapes/two.jpeg',
                '/images/Lavish_Landscapes/two.jpg'
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
            images: [
                '/images/Wonderful_Wildlife/four.jpg',
                '/images/Wonderful_Wildlife/three.jpg',
                '/images/Wonderful_Wildlife/two.jpg',
                '/images/Wonderful_Wildlife/wildlife.webp'
            ],
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
            images: [
                '/images/Magnificent_Monuments/fort.jpg',
                '/images/Magnificent_Monuments/four.JPG',
                '/images/Magnificent_Monuments/three.jpg',
                '/images/Magnificent_Monuments/two.jpg'
            ],
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
            images: [
                '/images/Lost_Civilizations/four.jpg',
                '/images/Lost_Civilizations/humpi.jpg',
                '/images/Lost_Civilizations/three.jpg',
                '/images/Lost_Civilizations/two.jpg'
            ],
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
            images: [
                '/images/Meals_of_a_Lifetime/food.jpg',
                '/images/Meals_of_a_Lifetime/one.JPG',
                '/images/Meals_of_a_Lifetime/three.JPG',
                '/images/Meals_of_a_Lifetime/two.JPG'
            ],
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
            images: [
                '/images/Spectacular_Cities/cities.jpg',
                '/images/Spectacular_Cities/one.jpg',
                '/images/Spectacular_Cities/three.jpg',
                '/images/Spectacular_Cities/two.jpg'
            ],
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
            images: [
                '/images/AfterMath_of_a_Empire/five.jpg',
                '/images/AfterMath_of_a_Empire/four.JPG',
                '/images/AfterMath_of_a_Empire/hills.jpeg',
                '/images/AfterMath_of_a_Empire/one.jpg',
                '/images/AfterMath_of_a_Empire/three.jpg',
                '/images/AfterMath_of_a_Empire/two.jpg'
            ],
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