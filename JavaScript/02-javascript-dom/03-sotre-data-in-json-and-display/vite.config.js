import { defineConfig } from "vite";
import { resolve } from "path"


export default defineConfig ({
    base: "/cyberdude-challenges/",

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./assets/js/main.js")
            }
        }
    }
})