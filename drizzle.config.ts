import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//     schema: "./db/schema.ts",
//     out: "./drizzle",
//     driver: "pg",
//     dialect: "pg",  // Add this line
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL!,
//     },
// } satisfies Config;

import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql", // "postgresql" | "mysql"
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
})
