// context/CollectionContext.tsx
'use client'

import { createContext, useContext, useState } from 'react';
import { Slide } from './HeroSlider';

interface CollectionContextType {
    currentCollection: Slide | null;
    setCurrentCollection: (slide: Slide) => void;
    clearCurrentCollection: () => void;
}

const CollectionContext = createContext<CollectionContextType | undefined>(undefined);

export function CollectionProvider({ children }: { children: React.ReactNode }) {
    const [currentCollection, setCurrentCollection] = useState<Slide | null>(null);

    const clearCurrentCollection = () => {
        setCurrentCollection(null);
    };

    return (
        <CollectionContext.Provider value={{
            currentCollection,
            setCurrentCollection,
            clearCurrentCollection
        }}>
            {children}
        </CollectionContext.Provider>
    );
}

export function useCollection() {
    const context = useContext(CollectionContext);
    if (context === undefined) {
        throw new Error('useCollection must be used within a CollectionProvider');
    }
    return context;
}