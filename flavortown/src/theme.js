import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'FontY, Arial, sans-serif', // Default to sans-serif FontY
        h1: {
            fontFamily: 'FontX, Times, serif', // Serif FontX for headings
            fontWeight: 700,
            fontSize: '3rem',
        },
    },
    palette: {
        lightMode: {
        main: '#1976d2', // Customize the primary color
        },
    //     darkMode: {
    //     main: '#dc004e', // Customize the secondary color
    //     },
    },
});

export default theme;