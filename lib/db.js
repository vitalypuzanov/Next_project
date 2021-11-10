// import {MongoClient, ObjectId} from 'mongodb';

export async function connectToDatabase(document) {
  const client = await MongoClient.connect(
    `mongodb+srv://vit:qwerty123@cluster0.6sdaa.mongodb.net/${document}?retryWrites=true&w=majority`,
  );
  return client;
}
