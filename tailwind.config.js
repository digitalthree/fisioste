module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                primary: '#5a73b5',
                secondary: '#264193',
                menuText: '#818181'
            },
            container: {
                padding: {
                    DEFAULT: '2rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
    corePlugins: {
        container: true
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1280px',
                    },
                    '@screen xl': {
                        maxWidth: '1400px',
                    },
                }
            })
        }
    ]
}