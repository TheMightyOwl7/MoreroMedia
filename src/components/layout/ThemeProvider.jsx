"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme = 'corporate' }) {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        if (theme === 'lifestyle') {
            document.documentElement.setAttribute('data-theme', 'lifestyle');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'corporate' ? 'lifestyle' : 'corporate');
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
