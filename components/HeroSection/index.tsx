'use client';

import Image from 'next/image';
import HeroSlider, { Slide } from './HeroSlider';
import { useRouter } from 'next/navigation';
import { useCollection } from './CollectionContext';

export default function HeroSection() {
    const { setCurrentCollection } = useCollection();
    const router = useRouter();
    const slides: Slide[] = [
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
            ctaText: 'View Collection',
            collectionProps: {
                images: [
                    '/images/Faith_and_Spirituality/collectionImages/Kedarnath.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Kasi_Viswanath.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Mahakaleshwar.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Badrinath.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Omkareshwar.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Nageswara.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Grishneshwara.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Trimbakeswar.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Somnath.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Bhimasankar.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Mallikarjuna.jpeg',
                    '/images/Faith_and_Spirituality/collectionImages/Rameshwaram.jpeg'
                ],
                names: [
                    'Kedarnath - Uttarakhand - Rudraprayag',
                    'Kashi Vishwanath - Uttarpradesh - Varanasi',
                    'Mahakaleshwar - Madhya Pradesh - Ujjain',
                    'Baidya Nath - Jharkhand - Deoghar',
                    'Omkareshwar - Madhya Pradesh - Khandwa',
                    'Nageshwara - Gujarat - Dwarka',
                    'Ghrishneshwar - Maharastra - Sambhaji Nagar',
                    'Trimbakeshwar - Maharastra - Nashik',
                    'Somnath - Gujarat - Veraval',
                    'BhimaShankar - Maharastra - Pune',
                    'Mallikarjuna - Andhra Pradesh - Srisailam',
                    'Rameshwaram - Tamil Nadu - Rameswaram'
                ],
                mainHeading: 'Our Exclusive Packages',
                exploreContent: [
                    'Explore the finest accommodations',
                    'Experience world-class service',
                    'Enjoy premium amenities'
                ],
                packageDetails: [
                    'Private beach access',
                    'All-inclusive dining',
                    'Spa treatments included'
                ],
                priceValue: 'Starting from $999',
                booking: 'Book now for early bird discount'
            }
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
            ctaText: 'View Collection',
            collectionProps: {
                images: ['/images/Lavish_Landscapes/trip-image.jpg'], // Add your Pondicherry image here
                names: ['Join us on a 2N/3D journey to Pondicherry, a haven of peace and tranquility!   '],
                mainHeading: 'Experience the French Charm of Pondicherry!',
                exploreContent: [
                    "French Quarter's colonial architecture and boutique hotels",
                    "Auroville's spiritual aura and yoga retreats",
                    "Promenade Beach's scenic views and picturesque sunrise"
                ],
                packageDetails: [
                    '2 nights stay in Pondicherry',
                    'Sightseeing & activities',
                    'Transportation & guide services'
                ],
                priceValue: 'Package Price: 77000/- per person',
                booking: 'Book now and indulge in the laid-back vibe of Pondicherry!'
            }
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
            ctaText: 'View Collection',
            collectionProps: {
                images: ['/images/Lost_Civilizations/humpi.jpg'],
                names: ['Hampi Heritage Journey'],
                mainHeading: 'Unveil the grandeur of a forgotten empire!',
                exploreContent: [
                    'A UNESCO World Heritage site in Karnataka',
                    'Journey back in time among boulders and legends',
                    'Every stone tells a story, every sunrise whispers ancient secrets over the Tungabhadra'
                ],
                packageDetails: [],
                priceValue: '',
                booking: ''
            }
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
            ctaText: 'View Collection',
            collectionProps: {
                images: ['/images/Spectacular_Cities/kerala.jpg'], // Add your Kerala image here
                names: ['Kerala Package'],
                mainHeading: "Kerala, God's Own Country!",
                exploreContent: [
                    'A heaven for travelers seeking serenity and adventure',
                    'From the majestic Western Ghats to the pristine beaches',
                    'Every moment is a treasure!'
                ],
                packageDetails: [],
                priceValue: 'Starting from 12,999/- per person',
                booking: 'Book now!!'
            }
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
            ctaText: 'View Collection',
            collectionProps: {
                images: ['/images/AfterMath_of_a_Empire/hills.jpeg'], // Add your Ooty and Coonoor image here
                names: ['Ooty and Coonoor 2N/3D Package'],
                mainHeading: 'Escape to the Queen of Hill Stations!',
                exploreContent: [
                    "Ooty's picturesque landscapes, tea gardens, and scenic views",
                    "Coonoor's serene atmosphere, beautiful waterfalls, and trekking trails",
                    "Most scenic toy train journey in the serene niligiri hills"
                ],
                packageDetails: [
                    'Accommodation for 2 nights',
                    'Transportation (up & down)',
                    'Local vehicle for 3 days',
                    'Tour guide'
                ],
                priceValue: 'All this for just 27000/- per person!',
                booking: 'Book now and experience the beauty of the Nilgiris!'
            }
        },
        // Add more slides as needed
    ];

    const handleCtaClick = (slide: Slide, slideIndex: number) => {
        setCurrentCollection(slide);
        router.push('/collection-view');
    };
    return (
        <main>
            <HeroSlider slides={slides} onCtaClick={handleCtaClick} />
        </main>
    );
}