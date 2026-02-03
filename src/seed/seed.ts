import dotenv from "dotenv";
import { chroma } from "../chroma/client";

dotenv.config();

async function seed() {
  const collection = await chroma.getOrCreateCollection({
    name: "example_collection"
  });

  await collection.add({
    ids: ["1", "2", "3", "4", "5"],
    documents: [
      "Perusahaan mempunyai visi untuk menjadi pemimpin pasar dan misi untuk memberikan layanan terbaik kepada pelanggan",
      "Perusahaan memiliki beberapa layanan seperti talent management, recruitment, dan konsultasi SDM",
      "Perusahaan berlokasi di Jl. Kenconowungu, Semarang, Indonesia",
      "Perusahaan didirikan pada tahun 2020 dan telah melayani banyak klien",
      "Perusahaan telah mendapatkan beberapa penghargaan di bidang layanan SDM"
    ]
  });

  console.log("Seeding complete");
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
