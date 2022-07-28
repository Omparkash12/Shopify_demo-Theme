import React from 'react';
import work_frame_1 from '../../assets/work_frame_1.png';
import work_frame_2 from '../../assets/work_frame_2.png';
import work_frame_3 from '../../assets/work_frame_3.png';
import work_frame_4 from '../../assets/work_frame_4.png';


const HowItWorks = () => {
    return (
        <section className="how_it_works_section float-left w-[100%]">
            <div className="container_ar">
                <div className="how_it_works_data pb-[3rem]">
                    <h1 className='text-[32px] leading-[38px] text-center pb-[28px]'>How it works</h1>

                    <div className="work_card_1 flex md:justify-between justify-center flex-wrap gap-[0]">
                        <div className="work_data max-w-[280px] w-[100%] h-[220px] px-[0px] flex flex-col justify-between items-center mb-[12px]">
                            <img src={work_frame_1} alt="" />
                            <p className='text-[16px] leading-[20px]'>Tear strip for regular load</p>
                        </div>

                        <div className="work_data max-w-[280px] w-[100%] h-[220px] px-[0px] flex flex-col justify-between items-center mb-[12px]">
                            <img src={work_frame_2} alt="" />
                            <p className='text-[16px] leading-[20px]'>Tear strip for regular load</p>
                        </div>

                        <div className="work_data max-w-[280px] w-[100%] h-[220px] px-[0px] flex flex-col justify-between items-center mb-[12px]">
                            <img src={work_frame_3} alt="" />
                            <p className='text-[16px] leading-[20px]'>Tear strip for regular load</p>
                        </div>

                        <div className="work_data max-w-[280px] w-[100%] h-[220px] px-[0px] flex flex-col justify-between items-center mb-[12px]">
                            <img src={work_frame_4} alt="" />
                            <p className='text-[16px] leading-[20px]'>Tear strip for regular load</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;