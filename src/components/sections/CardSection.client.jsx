// The component name must finish with .client.jsx | .client.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

// images
import thumb from '../../assets/thumbs-up.svg';
import Frame1 from '../../assets/Frame1.svg';
import Frame2 from '../../assets/Frame2.svg'
import Frame3 from '../../assets/Frame3.svg'



export default function SimpleSlider() {
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
        <>

            <section className="card_section">
                <div className="container_ar">
                    <div className="Card_slider pb-[5rem]">
                        <Slider {...settings}>
                            <div className="card_data_1 text-center">
                                <div className="car_image">
                                    <img className='m-[auto]' src={thumb} alt="" />
                                </div>
                                <h4>Test text</h4>
                                <p>Test text</p>
                            </div>
                            <div className="card_data_1 text-center">
                                <div className="car_image">
                                    <img className='m-[auto]' src={Frame1} alt="" />
                                </div>
                                <h4>Test text</h4>
                                <p>Test text</p>
                            </div>
                            <div className="card_data_1 text-center">
                                <div className="car_image">
                                    <img className='m-[auto]' src={Frame2} alt="" />
                                </div>
                                <h4>Test text</h4>
                                <p>Test text</p>
                            </div>
                            <div className="card_data_1 text-center">
                                <div className="car_image">
                                    <img className='m-[auto]' src={Frame3} alt="" />
                                </div>
                                <h4>Test text</h4>
                                <p>Test text</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    );
}