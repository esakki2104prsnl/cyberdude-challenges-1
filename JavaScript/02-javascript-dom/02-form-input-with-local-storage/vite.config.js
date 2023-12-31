import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/cyberdude-challenges/",

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                details: resolve(__dirname, 'all_details.html'),
                main: resolve(__dirname, './assets/js/main.js'),
                utils: resolve(__dirname, './assets/js/utils.js'),
                patientList: resolve(__dirname, './assets/js/patientTableList.js')
            }
        },

    }
})