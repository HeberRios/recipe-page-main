/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: "Outfit",
                young: '"Young Serif"',
            },
            colors: {
                "mule-fawn": {
                    50: "#fbf3f1",
                    100: "#f6e4de",
                    200: "#ecc8bc",
                    300: "#e0a591",
                    400: "#d38064",
                    500: "#c96746",
                    600: "#bb5b3b",
                    700: "#9c4d32",
                    800: "#864732",
                    900: "#663828",
                    950: "#361c14",
                },
                disco: {
                    50: "#fcf3f9",
                    100: "#f9eaf4",
                    200: "#f5d5e9",
                    300: "#eeb3d7",
                    400: "#e383bc",
                    500: "#d65ea1",
                    600: "#c33f83",
                    700: "#a82e69",
                    800: "#8b2957",
                    900: "#7b284f",
                    950: "#46112a",
                },
            },
        },
    },
    plugins: [],
};
