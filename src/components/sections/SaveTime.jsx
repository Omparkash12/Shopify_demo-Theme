import React from 'react'

const SaveTime = (props) => {
    return (
        <section className="SaveTime_secrion w-[100%] float-left">
            <div className="container_fluid_ar">
                <div className="about_data flex sm:flex-row flex-col items-center sm:px-[0] px-[24px] md:py-[3rem] py-[2rem]">
                    <div className="left_data sm:w-[50%] w-[100%]">
                        <img className='w-[100%]' src={props.SectionImage} alt="" />
                    </div>
                    <div className="left_data sm:w-[50%] w-[100%]">
                        <div className="relative -left-[45px] px-[40px] bg py-[20px] bg-[#fff]">
                            <h1 className='sm:text-[42px] text-[32px] sm:leading-[48px] leading-[38px] font-[700] sm:p-[0] pt-[12px]'>
                                {props.sectionHeading}
                            </h1>
                            <p className='md:py-[24px] py-[16px] sm:text-[16px] text-[12px] sm:leading-[20px] leading-[16px] font-[Nexa]'>
                                {props.sectionText}
                            </p>
                            <a href="/#" className='flex items-center justify-center font-[Nexa] sm:text-[16px] text-[12px] sm:leading-[20px] leading-[16px] uppercase max-w-[140px] w-[100%] h-[42px] bg-[#7AD8E7]'>
                                {props.sectionButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveTime;