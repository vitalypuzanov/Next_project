import React from 'react';
import {MongoClient} from 'mongodb';
import СategoriesGrid from '../../components/HomePage/Сategories/СategoriesGrid';

function index(props) {
  return <СategoriesGrid actualdata={props.actualdata}></СategoriesGrid>;
}

export default index;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://vit:qwerty123@cluster0.6sdaa.mongodb.net/main?retryWrites=true&w=majority',
  );
  const db = client.db();

  const mainCollection = db.collection('main');
  const main = await mainCollection.find().toArray();
  client.close();

  return {
    props: {
      actualdata: main.map((main) => ({
        image: main.image,
        title: main.title,
      })),
    },
    revalidate: 1,
  };
}
