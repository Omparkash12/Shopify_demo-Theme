import React from 'react'

const SaveTime = (props) => {
    return (
        <section className="SaveTime_secrion w-[100%] float-left">
            <div className="container_fluid_ar">
                <div className="about_data flex md:flex-row flex-col items-center md:px-[0] px-[24px] md:py-[3rem] py-[2rem]">
                    <div className="left_data md:w-[50%] w-[100%]">
                        <img className='w-[100%]' src={props.SectionImage} alt="" />
                    </div>
                    <div className="left_data md:w-[50%] w-[100%]">
                        <div className="relative md:-left-[45px] left-[0px] md:px-[40px] px-[16px] md:py-[20px] py-[16px] bg-[#fff]">
                            <h1 className='md:text-[42px] text-[24px] md:leading-[48px] leading-[28px] font-[700] sm:p-[0] pt-[12px] font-["Ambroise_Demi"]'>
                                {props.sectionHeading}
                            </h1>
                            <p className='md:py-[24px] py-[16px] md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[Nexa]'>
                                {props.sectionText}
                            </p>
                            <a href="/#" className='flex items-center justify-center font-[Nexa] md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] uppercase max-w-[140px] w-[100%] h-[42px] bg-[#7AD8E7]'>
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