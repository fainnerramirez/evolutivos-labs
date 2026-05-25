import {
    createSystem,
    defaultConfig,
    defineConfig
} from "@chakra-ui/react";
// @ts-ignore
import '@fontsource/ubuntu';

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                body: {
                    value: `'Ubuntu', sans-serif`,
                },
                heading: {
                    value: `'Ubuntu', sans-serif`,
                },
            },
        },
    },
})

const customSystem = createSystem(defaultConfig, config)
export default customSystem;