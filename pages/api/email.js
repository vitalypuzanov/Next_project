import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {email} = data;

    const client = await MongoClient.connect(
      'mongodb+srv://vit:qwerty123@cluster0.6sdaa.mongodb.net/email?retryWrites=true&w=majority',
    );
    const db = client.db();

    const emailCollection = db.collection('email');
    const result = await emailCollection.insertOne({data});
    console.log(result);
    client.close();

    res.status(201).json({message: 'entered email!'});
  }
}

export default handler;
