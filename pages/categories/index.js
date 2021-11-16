import React from 'react';

import СategoriesGrid from '../../components/HomePage/Сategories/СategoriesGrid';
import {connectToDatabase} from '../../lib/db';

function index(props) {
  return <СategoriesGrid actualdata={props.actualdata}></СategoriesGrid>;
}

export default index;

export async function getStaticProps() {
  const client = await connectToDatabase();
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
