import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/* --- Directly connect DB in server.js ---

import express from "express";
const app = express();

// ( ()=>{} )()  -- IIFE's used to immediately invoke the function
(async () => {
  try {
    await mongoose.connect(`${process.env.MONODB_URI}/${DB_NAME}`)
    app.on("error", (error)=> {
        console.log("Error: ", error);
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error: ", error);
    throw error
  }
})();
*/
