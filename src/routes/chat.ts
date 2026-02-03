import express from "express";
// import bodyParser from "body-parser";
import { chroma } from "../chroma/client";

const router = express.Router();

router.post("/chat", async (req, res) => {
    
    const { message } = req.body;

    const collection = await chroma.getOrCreateCollection({ name: "example_collection" });

    const results = await collection.query({
        queryTexts: [message],
        nResults: 5,
    });

    res.json(results);
});

export default router;