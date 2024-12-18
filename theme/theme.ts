import { createSystem, defaultConfig } from "@chakra-ui/react"

const theme = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      backgroundColor: "#FFFFFF",
      color: "gray.700",
    },
  },
})

export default theme;