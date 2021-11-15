import React from 'react';
import CardDetail from '../../components/Carddetail/CardDetail';

import {ObjectId} from 'mongodb';
import {connectToDatabase} from '../../lib/db';

export async function getStaticPaths() {
  connectToDatabase;
  const client = await connectToDatabase();
  const db = client.db();
  const goodsCollection = db.collection('goods');
  const goods = await goodsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: goods.map((goods) => ({
      params: {goodsId: goods._id.toString()},
    })),
  };
}

export async function getStaticProps(context) {
  const goodsId = context.params.goodsId;
  const client = await connectToDatabase();
  const db = client.db();

  const goodsCollection = db.collection('goods');
  const selectedgoods = await goodsCollection.findOne({
    _id: ObjectId(goodsId),
  });
  console.log(selectedgoods);
  client.close();

  return {
    props: {
      selectedgoods: {
        id: selectedgoods._id.toString(),
        image: selectedgoods.image,
        title: selectedgoods.title,
        price: selectedgoods.price,
        description: selectedgoods.description,
        fulldescription: selectedgoods.fulldescription,
      },
      revalidate: 1,
    },
  };
}

function index(props) {
  return (
    <>
      <CardDetail
        image={props.selectedgoods.image}
        title={props.selectedgoods.title}
        description={props.selectedgoods.description}
        price={props.selectedgoods.price}
        fulldescription={props.selectedgoods.fulldescription}
      />
    </>
  );
}

export default index;
