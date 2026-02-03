import dotenv from "dotenv";
import { chroma } from "../chroma/client";

dotenv.config();

async function seed() {
  const collection = await chroma.getOrCreateCollection({
    name: "example_collection"
  });

  await collection.add({
    ids: ["doc-1", "doc-2", "doc-3", "doc-4", "doc-5"],
    documents: [
      "Chroma is a vector database",
      "Express works well with TypeScript",
      "Ini adalah suatu teks",
      "Armuji adalah seorang bupati",
      "Saya suka makan nasi goreng"
    ]
  });

  console.log("Seeding complete");
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
