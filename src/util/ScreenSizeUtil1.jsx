import React, { useState, useEffect } from 'react';

export function useScreenSize1() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            setIsLargeScreen(screenWidth <= 640 || screenWidth > 1280); // Adjusted condition
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isLargeScreen;
}
