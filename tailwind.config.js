module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "hijau-telpon": "#249A8C",
                "kuning-cerah": "#FFEF82",
                "kuning-gelap": "#EFD345",
                "hijau-cerah": "#BABD42",
                "hijau-gelap": "#82954B",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
