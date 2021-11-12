import React from 'react';
import CardGrid from '../../components/Card/CardGrid';
import {connectToDatabase} from '../../lib/db';

function goods(props) {
  return (
    <div>
      <CardGrid cards={props.actualdata}></CardGrid>
    </div>
  );
}

export async function getStaticProps() {
  const client = await connectToDatabase();
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
