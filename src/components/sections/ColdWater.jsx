import React from 'react'

const ColdWater = (props) => {
    return (
        <section className="cold-water_section  w-[100%] float-left">
            <div className="container_fluid_ar">
                <div className="about_data flex md:flex-row flex-col-reverse items-center md:px-[0] px-[24px] md:py-[3rem] py-[2rem]">
                    <div className="left_data md:w-[50%] w-[100%]">
                        <div className="relative md:-right-[45px] right-[0px] md:px-[40px] md:py-[20px] px-[16px] py-[16px] bg-[#fff]">
                            <h1 className='md:text-[42px] text-[24px] md:leading-[48px] leading-[28px] font-[700] sm:p-[0] pt-[12px] font-["Ambroise_Demo"]'>
                                Instantly dissolve in hot or cold water
                            </h1>
                            <p className='md:py-[24px] py-[16px] md:text-[16px] text-[12px] sm:leading-[20px] leading-[16px] font-[Nexa]'>
                                Our eco-friendly strips dissolve in a matter of seconds in both hot and cold water. They are compatible with any machine, HE included. You can even use them to hand wash your more delicate clothes!
                            </p>
                            <a href="/#" className='flex items-center justify-center font-[Nexa] md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] uppercase max-w-[140px] w-[100%] h-[42px] bg-[#7AD8E7]'>
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="left_data md:w-[50%] w-[100%]">
                        <img className='w-[100%]' src={props.cold_water} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ColdWater;