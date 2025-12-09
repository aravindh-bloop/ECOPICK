/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                "scroll-left": {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(-50%)",
                    },
                },
                rainbow: {
                    "0%": { "background-position": "0%" },
                    "100%": { "background-position": "200%" },
                },
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                shimmer: "shimmer 2s linear infinite",
                "scroll-left": "scroll-left 30s linear infinite",
                rainbow: "rainbow 2s infinite linear",
            },
        },
    },
    plugins: [],
}
