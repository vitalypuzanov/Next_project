import {MongoClient} from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://vitaly:qwerty123456789@cluster0.r7i88.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  );
  return client;
}
