// import { MongoClient } from "mongodb";
const uri = "mongodb+srv://atlasAdmin:ctg7Ttoh9jp1jeTo@cluster0.8pibjv7.mongodb.net/?retryWrites=true&w=majority";

// const db = async (req, res) => {
//     try {
//         const client = new MongoClient(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         await client.connect();
//         const db = client.db("emart");
//         console.log("Database connected successfully!"); // Add this line
//         return db;
//     } catch (error) {
//         console.error("Error connecting with database", error);
//         res.status(500).send("Database connection error!");
//     }
// };

// export { db };

import mongoose from "mongoose";

const connection = async () => {
    try {
        const result = await mongoose.connect(uri);
        if (result) {
            console.log("Database connected successfully!");
        }
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

export default connection;