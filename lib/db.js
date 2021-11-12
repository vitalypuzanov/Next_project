import {MongoClient, ObjectId} from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://vit:qwerty123@cluster0.6sdaa.mongodb.net/goods?retryWrites=true&w=majority',
  );
  return client;
}
