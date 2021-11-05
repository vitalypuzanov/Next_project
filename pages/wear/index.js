import React from 'react';
import Cardgrid from '../../components/Card/Cardgrid';
import {MongoClient} from 'mongodb';

function goods(props) {
  return (
    <div>
      <Cardgrid cards={props.actualdata}></Cardgrid>
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://vit:qwerty123@cluster0.6sdaa.mongodb.net/goods?retryWrites=true&w=majority',
  );
  const db = client.db();

  const goodsCollection = db.collection('goods');
  const datacard = await goodsCollection.find().toArray();
  client.close();

  return {
    props: {
      actualdata: datacard.map((datacard) => ({
        image: datacard.image,
        title: datacard.title,
        description: datacard.description,
        price: datacard.price,
        slug: datacard.slug,
        size: datacard.size,
        article: datacard.article,
      })),
    },
    revalidate: 1,
  };
}

export default goods;
