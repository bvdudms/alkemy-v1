// ScreenSizeUtil.js
import React, { useState, useEffect } from 'react';

export function useScreenSize() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 768); // Define your threshold for small screen
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmallScreen;
}
