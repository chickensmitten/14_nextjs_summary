import { MongoClient } from "mongodb";
// /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.srxozkr.mongodb.net/meetups?retryWrites=true&w=majority`);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).jason({message: "Meetup inserted!"});
  }
}

export default handler;