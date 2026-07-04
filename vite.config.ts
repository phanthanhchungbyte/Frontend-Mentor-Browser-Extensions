import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/Frontend-Mentor-Browser-Extensions/",
	plugins: [react()],
	resolve: {
		tsconfigPaths: true,
	},
});
