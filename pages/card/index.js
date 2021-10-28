import React, {Fragment} from 'react';
import Head from 'next/head';
import Select from '../../components/UI/Select';
import Carddetail from '../../components/Carddetail/Carddetail';

function Card() {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <Carddetail></Carddetail>
    </Fragment>
  );
}

export default Card;
