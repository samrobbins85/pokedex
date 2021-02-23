const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                warmGray: colors.warmGray,
                amber: colors.amber,
                lime: colors.lime,
                violet: colors.violet,
                orange: colors.orange,
                cyan: colors.cyan,
                teal: colors.teal,
                fuchsia: colors.fuchsia,
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/forms")],
};
