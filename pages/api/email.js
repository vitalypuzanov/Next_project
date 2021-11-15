import {connectToDatabase} from '../../lib/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {email} = data;
    const client = await connectToDatabase();
    const db = client.db();

    const emailCollection = db.collection('email');
    const result = await emailCollection.insertOne({data});
    console.log(result);
    client.close();

    res.status(201).json({message: 'entered email!'});
  }
}

export default handler;
