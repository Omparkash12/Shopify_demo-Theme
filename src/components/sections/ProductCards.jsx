import {ProductCard} from '../cards/ProductCard.client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





export function ProductCards({products}) {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

  return (
    <> <Slider {...settings}>
      {products.map((product) => (
       
        <ProductCard
          product={product}
          key={product.id}
          className={'snap-start w-80'}
        />,<h1>eee</h1>
        
      ))}
      </Slider>
    </>
  );
}
