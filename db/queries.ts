//to fetch the data from db
//no need to use props everytime

import { cache } from "react";
import db from "@/db/drizzle";
import { userProgress } from "./schema";
import { eq } from "drizzle-orm";

export const getUserProgress = cache(async()=>{
    const {userId} = await auth();

    if(!userId){
        return null;
    }

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    })
})

export const getCourses = cache(async()=>{
    const data = await db.query.courses.findMany();
    return data;
});


function auth(): { userId: any; } | PromiseLike<{ userId: any; }> {
    throw new Error("Function not implemented.");
}
// function auth(): { userId: any; } | PromiseLike<{ userId: any; }> {
//     throw new Error("Function not implemented.");
// }
