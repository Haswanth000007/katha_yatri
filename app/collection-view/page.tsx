// app/collection/page.tsx
'use client'

import { useCollection } from '@/components/HeroSection/CollectionContext';
import { CollectionView } from '@/components/HeroSection/ViewCollection';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function HomePage() {
    const { currentCollection, clearCurrentCollection } = useCollection();

    if (!currentCollection?.collectionProps) {
        return (
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4">No collection data available</Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => window.history.back()}
                >
                    Go Back
                </Button>
            </Box>
        );
    }

    return <CollectionView collectionProps={currentCollection.collectionProps} />;
}