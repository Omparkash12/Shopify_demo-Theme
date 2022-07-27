import React from 'react';
import BannerImages from '../../assets/demo_img.svg';

const ArSection = () => {
  return (
    <>
      <section className='custom_banner'>
        <div className="container_ar">
          <div className="banner">
            <div className="left_data">
              <h1>Laundry Detergent Reimagined.</h1>
              <p>Powerful, sustainable, plant based laundry detergent in the form of super versatile strips.</p>
              <a href="/#">Shop Now</a>
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