import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                ifresa: {
                    blue: "#0a192f", // Azul marino profundo
                    metal: "#94a3b8", // Gris metálico
                    light: "#f8fafc", // Blanco/Gris muy claro
                }
            },
        },
    },
    plugins: [],
};
export default config;
