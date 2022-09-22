/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {}
    },
    plugins: []
}
/** @type {import('tailwindcss').Config} */

// Will generate different spacing values ((0.8rem based))
const generateSpacing = (pixelsBase, values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace('.', '_')}`] = `${(
            pixelsBase *
            v *
            0.1
        ).toFixed(1)}rem`
        return acc
    }, {})
}

const generateFontSizes = (values) => {
    return values.reduce((acc, v) => {
        acc[v] = `${(v * 0.1).toFixed(1)}rem`
        return acc
    }, {})
}

const generateValues = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace('.', '_')}`] = v
        return acc
    }, {})
}

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './styles/**/*.{css,scss}',
        './public/**/*.{json, md}'
    ],
    theme: {
        extend: {
            screens: {
                xl: '1440px'
            },
            width: {
                content: 'fit-content',
                240: '240px',
                '90%': '90%'
            },
            borderRadius: {
                '0_5': '0.4rem',
                circle: '100%'
            },
            transitionDuration: {
                250: '250ms'
            },
            aspectRatio: {
                '1680/960': '1680 / 960',
                '840/960': '840 / 960'
            },
            zIndex: {
                1: '1',
                2: '2',
                3: '3'
            },
            maxWidth: {
                960: '960px'
            }
        },
        spacing: generateSpacing(
            8,
            [
                0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 7.5, 8, 9, 10, 12,
                13, 14, 15, 16, 18, 18.75, 20, 21, 22, 23, 25, 26, 28, 30, 32,
                34, 36, 38, 40, 42
            ]
        ),
        fontSize: generateFontSizes([
            12, 14, 16, 18, 20, 24, 32, 40, 48, 56, 60, 100
        ]),
        inset: {
            ...generateValues([0, 20, 30, 60, 68, 120]),
            '1/2': '50%',
            auto: 'auto'
        },
        colors: {
            black: '#101001',
            white: '#ffffff'
        },
        boxShadow: {
            l: '0 0 20rem 0 #0000001A',
            m: '0 0 0.6rem 0 #0000000F'
        },
        lineHeight: generateValues([1, 1.2, 1.4, 1.5, 1.6]),
        fontWeight: generateValues([
            100, 200, 300, 400, 500, 600, 700, 800, 900
        ])
    },
    plugins: []
}
