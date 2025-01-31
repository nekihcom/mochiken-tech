import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    html: {
      // colorPalette: ', // Change this to any color palette you prefer
      color: 'gray.950'
    },
  },
})

export const system = createSystem(defaultConfig, config)