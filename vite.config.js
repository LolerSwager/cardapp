import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: "Anita Berg",
                short_name: "AB",
                theme_color: "#ff8a9e",
                background_color: "#1a1a1a",
                icons: [{ src: "/icons/AB.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }],
            },
            registerType: "autoUpdate",
        }),
    ],
})
