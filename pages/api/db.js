import { MongoClient } from "mongodb";

const client = await MongoClient.connect(process.env.MONGODB_URI);
const db = client.db();
const recetas = db.collection("Houses");

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'POST':
      const newProperty = {
        description: body.description,
        bathrooms: parseInt(body.bathrooms),
        bedrooms: parseInt(body.bedrooms),
        imageUrl: body.imageUrl
      };
      try {
        const answer = await recetas.insertOne(newProperty);
        return res.status(200).json({ message: "se añadió con éxito" });
      } catch (error) {
        return res.status(500).json({ message: "Te falló hermano" });
      }
      break;
    case 'GET':
      const result = await recetas.find().toArray();
      return res.status(200).json(result);
      break;
  }
}
