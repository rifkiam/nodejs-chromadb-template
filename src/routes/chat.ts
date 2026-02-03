import express from "express";
import { chroma } from "../chroma/client";
import { chatSchema, validateBody } from "../types/schema";

const router = express.Router();

router.post("/chat", validateBody(chatSchema), async (req, res) => {
    const { message } = req.body;

    const collection = await chroma.getOrCreateCollection({ name: "example_collection" });

    const results = await collection.query({
        queryTexts: [message],
        nResults: 5,
    });

    const newRes = results.ids[0].map((id: string, index: number) => ({
        id,
        document: results.documents[0][index],
        distance: results.distances ? results.distances[0][index] : null,
        metadata: results.metadatas ? results.metadatas[0][index] : null,
    }));

    res.json({
        message: "Query Results",
        data: newRes
    });
});

// For use when you want to create a chatroom interface
// router.get("/chat", (req, res) => {
//     res.send("Chat endpoint is working");
// })

export default router;