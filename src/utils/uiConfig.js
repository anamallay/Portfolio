export const getTheme = (mode) => ({
  sizes: {
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
    "10xl": "10rem",
  },
  colors:
    mode === "light"
      ? {
          dark: "#f1f5f9",
          light: "#070a13",
          slate400: "#1e293b",
          slate600: "#1e293b",
          slate800: "#1e293b",
          rose: "#e11d48",
          indigo: "#4f46e5",
          teal: "#0d9488",
        }
      : {
          dark: "#070a13",
          light: "#f1f5f9",
          slate400: "#94a3b8",
          slate600: "#475569",
          slate800: "#1e293b",
          rose: "#e11d48",
          indigo: "#4f46e5",
          teal: "#0d9488",
        },
  screenSizes: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
});

// rose: rgb(225, 29, 72)
// teal: rgb(13, 148, 136)
// indigo: rgb(79, 70, 229)
