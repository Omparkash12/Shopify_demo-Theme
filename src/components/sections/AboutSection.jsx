import React from 'react';
import about_image from '../../assets/about_image.svg';

const AboutSection = () => {
    return (
        <section className="aboutSection bg-[#F8EDE3] float-left w-[100%]">
            <div className="container_ar">
                <div className="about_data flex sm:flex-row flex-col items-center gap-[2%] py-[5rem]">
                    <div className="left_data sm:w-[50%] w-[100%]">
                        <img className='w-[100%]' src={about_image} alt="" />
                    </div>
                    <div className="left_data sm:w-[50%] w-[100%]">
                        <h1 className='sm:text-[42px] text-[32px] sm:leading-[48px] leading-[38px] font-[700] sm:p-[0] pt-[12px]'>About us</h1>
                        <p className='md:py-[24px] py-[16px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio at donec arcu pellentesque vitae, nunc. Nibh pulvinar tellus nisl magna vitae consequat neque. Sit congue elementum amet interdum commodo.
                        </p>
                        <a href="/#" className='flex items-center'>Know More
                            <span className='ml-[12px]'>
                                <svg width="50" height="17" viewBox="0 0 50 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49 8.5L1 8.5M49 8.5L41.9863 16M49 8.5L41.9863 1" stroke="#232323" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;