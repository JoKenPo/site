import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#ffbd59",
        site: {
          bg: {
            DEFAULT: "#fdfdfd",
            dark: "#111111",
          },
          surface: {
            DEFAULT: "#f1f1f1",
            dark: "#1a1a1a",
            elevated: "#1e1e1e",
          },
          border: {
            DEFAULT: "#e2e2e2",
            dark: "#2a2a2a",
          },
          text: {
            DEFAULT: "#1a1a1a",
            dark: "#e5e5e5",
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: [
          "JetBrains Mono",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.blue.700"),
            "--tw-prose-invert-links": theme("colors.brand"),
            a: {
              textUnderlineOffset: "2px",
              "&:hover": {
                textDecorationColor: "transparent",
              },
            },
            code: {
              "&::before": { content: "none !important" },
              "&::after": { content: "none !important" },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
