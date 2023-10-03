import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      "100": "#211F1F"
    },
    light: {
      "100": "#FFFFFF"
    },
    pink: {
      "100": "#C62178",
      "200": "#E63760"
    },
    blue: {
      "100": "#3A38BF",
      "200": "#2D9DC5"
    },
    purple: {
      "100": "#694BA9",
      "200": "#6F3AD7"
    },
    yellow: {
      "100": "#EAAA24",
      "200": "#FFC21F"
    },
    red: {
      "100": "#ED4328",
      "200": "#EC1922"
    },
    green: {
      "100": "#19A31E",
      "200": "#76B448"
    }
  },
  fonts: {
    heading: "Manrope, sans-serif;",
    body: "Manrope, sans-serif;",
  },
  styles: {
    html: {
      height: "100%",
      width: "100%"
    },
    global: {
      body: {
        height: "inherit",
        width: "inherit",
        lineHeight: "160%",
        fontWeight: 400,
        maxWidth: "100vw",
        overflow: "scroll"
      }
    },
  },
  components: {}
});