import { MongoClient } from "mongodb";
import type { Player } from "./types";

const uri = process.env.MONGODB_URI;
const dbName = "top50";

if (!uri) {
  throw new Error('MONGODB_URI no está definida en .env');
}

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection<Player>("top50");

    const aggregation = await collection.aggregate([
      {
        $group: {
          _id: "$bio.residence",
          avg: { $avg: "$career.totals.win_rate"}
        }
      },
    ]).toArray();

    console.log(JSON.stringify(aggregation, null, 2));

  } catch (error) {
    console.error("Error", error)
  } finally {
    await client.close();
  }
}

main()