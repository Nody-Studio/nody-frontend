import sharedConfig from "@nody/tailwind-config";
import type { Config } from "tailwindcss";


const config = {
  content: [
    "./app/**/*.tsx",
    "../../packages/ui/src/components/**/*.tsx"
  ],
  presets: [sharedConfig],
};


export default config as unknown as Config;