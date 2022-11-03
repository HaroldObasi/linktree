/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
            },
            colors: {
                "pro_black": "#344054BF",
                "inputblue": "84CAFF",
            },
        },
    },
    plugins: [],
};
