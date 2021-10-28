import React from 'react';
import Cardgrid from '../../components/Card/Cardgrid';

function goods(props) {
  const datacard = [
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
    {
      image: '/image/hoode.jpg',
      title: 'Burbery',
      description: 'парка с капюшоном и логотипом',
      price: '50$',
      slug: 1,
      size: 's',
      article: 2,
    },
  ];

  return (
    <div>
      <Cardgrid cards={datacard}></Cardgrid>
    </div>
  );
}

export default goods;
