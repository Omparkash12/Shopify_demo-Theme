import { Link } from '@shopify/hydrogen';
import React from 'react';
import BannerImages from '../../assets/demo_img.svg';

const ArSection = () => {
  return (
    <>
      <section className='custom_banner'>
        <div className="container_ar">
          <div className="banner md:pt-[3rem] md:pb-[1rem] py-[2rem]">
            <div className="left_data">
              <h1 className='font-["Ambroise_Demi"]'>Laundry Detergent Reimagined.</h1>
              <p>Powerful, sustainable, plant based laundry detergent in the form of super versatile strips.</p>
              <Link to="/collections">Shop Now</Link>
            </div>
            <div className="right_data">
              <img src={BannerImages} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArSection;