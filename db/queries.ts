//to fetch the data from db
//no need to use props everytime

import { cache } from "react";
import db from "@/db/drizzle";

export const getCourses = cache(async()=>{
    const data = await db.query.courses.findMany();
    return data;
});