import { MongoClient } from "mongodb";
// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.srxozkr.mongodb.net/meetups?retryWrites=true&w=majority`);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close(); // without await when insertOne, it causes the following error "error - unhandledRejection: PoolClosedError [MongoPoolClosedError]: Attempted to check out a connection from closed connection pool"

    res.status(201).json({message: "Meetup inserted!"});
  }
}

export default handler;