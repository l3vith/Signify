//to change db directly here and not in studio

import "dotenv/config";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, schema);

const main = async () => {
    try{
        console.log("Seeding database...");
         
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "ASL",
                imageSrc: "/asl.png"
            },
            {
                id: 2,
                title: "ISL",
                imageSrc: "/isl.png"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of ASL"
            }
            
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns",
                order: 1,
            },
            
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                Question: 'Which one of these is the "the man"?',
            },
            
        ]);

        await db.insert(schema.challengesOption).values([
            {
                id: 1,
                challengeId: 1,
                type: "SELECT",
                imageSrc: "/man.svg",
                correct: true,
                text: "el hombre",
            }
        ]);

        
        console.log("Seeding finished")

    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();