import React from 'react';
import footer_brand_logo from '../../assets/footer_brand_logo.png';
import {
    Disclosure,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'




const FooterSection = () => {
    return (
        <>
            <section className='footer_brand_ar'>
                <div className="footer_brand_data text-[#B8DFE7]">
                    <div className="hidden md:block">
                        <div className="Footer_brand_image md:cursor-default">
                            <img src={footer_brand_logo} alt="" />
                        </div>
                        <p className='py-[2rem] text-[20px] leading-[24px] font-["Ambroise_Demi"] tracking-[2px]'>Laundry Detergent Reimagined</p>
                        <div className="footer_social_media_icon flex gap-[20px]">
                            <a href='/#' className='hover:-translate-y-[10px] duration-[.3s]'>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5H34.5V34.5H0.5V0.5Z" stroke="#BBE2EA" />
                                    <path d="M26.3438 7.84375H7.65625C7.20684 7.84375 6.84375 8.20684 6.84375 8.65625V27.3438C6.84375 27.7932 7.20684 28.1562 7.65625 28.1562H26.3438C26.7932 28.1562 27.1562 27.7932 27.1562 27.3438V8.65625C27.1562 8.20684 26.7932 7.84375 26.3438 7.84375ZM23.9977 13.7725H22.3752C21.1031 13.7725 20.8568 14.3768 20.8568 15.2654V17.223H23.8936L23.4975 20.2877H20.8568V28.1562H17.6906V20.2902H15.0424V17.223H17.6906V14.9633C17.6906 12.3404 19.2928 10.9109 21.6338 10.9109C22.7561 10.9109 23.7184 10.9947 24.0002 11.0328V13.7725H23.9977Z" fill="#DBF2F6" />
                                </svg>
                            </a>

                            <a href='/#' className='hover:-translate-y-[10px] duration-[.3s]'>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5H34.5V34.5H0.5V0.5Z" stroke="#BBE2EA" />
                                    <path d="M17.0993 14.6154C15.2214 14.6154 13.6889 16.1363 13.6889 18C13.6889 19.8636 15.2214 21.3845 17.0993 21.3845C18.9772 21.3845 20.5097 19.8636 20.5097 18C20.5097 16.1363 18.9772 14.6154 17.0993 14.6154ZM27.328 18C27.328 16.5984 27.3408 15.2095 27.2615 13.8105C27.1821 12.1855 26.8086 10.7433 25.6113 9.55505C24.4113 8.36423 22.9607 7.99607 21.3233 7.91736C19.911 7.83865 18.5116 7.85134 17.1019 7.85134C15.6896 7.85134 14.2901 7.83865 12.8804 7.91736C11.243 7.99607 9.78983 8.36677 8.59248 9.55505C7.39257 10.7459 7.02159 12.1855 6.94228 13.8105C6.86297 15.2121 6.87576 16.601 6.87576 18C6.87576 19.399 6.86297 20.7904 6.94228 22.1894C7.02159 23.8144 7.39513 25.2566 8.59248 26.4449C9.79239 27.6357 11.243 28.0039 12.8804 28.0826C14.2927 28.1613 15.6922 28.1486 17.1019 28.1486C18.5141 28.1486 19.9136 28.1613 21.3233 28.0826C22.9607 28.0039 24.4139 27.6332 25.6113 26.4449C26.8112 25.2541 27.1821 23.8144 27.2615 22.1894C27.3433 20.7904 27.328 19.4015 27.328 18ZM17.0993 23.2076C14.1955 23.2076 11.8519 20.8818 11.8519 18C11.8519 15.1181 14.1955 12.7924 17.0993 12.7924C20.0031 12.7924 22.3467 15.1181 22.3467 18C22.3467 20.8818 20.0031 23.2076 17.0993 23.2076ZM22.5616 13.7953C21.8836 13.7953 21.3361 13.2519 21.3361 12.5791C21.3361 11.9062 21.8836 11.3629 22.5616 11.3629C23.2396 11.3629 23.7871 11.9062 23.7871 12.5791C23.7873 12.7388 23.7557 12.8971 23.6942 13.0447C23.6327 13.1924 23.5424 13.3265 23.4286 13.4395C23.3148 13.5525 23.1796 13.6421 23.0308 13.7031C22.882 13.7642 22.7226 13.7955 22.5616 13.7953Z" fill="#DBF2F6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* For Mobile View Screen */}
                    <div className="block md:hidden">
                        <Disclosure>
                            <Disclosure.Button className="Footer_brand_image md:cursor-default flex items-center justify-between W-100%">
                                <img src={footer_brand_logo} alt="" />
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <p className='py-[2rem] text-[20px] leading-[24px] font-["Ambroise_Demi"] tracking-[2px]'>Laundry Detergent Reimagined</p>
                                <div className="footer_social_media_icon flex gap-[20px]">
                                    <a href='/#' className='hover:-translate-y-[10px] duration-[.3s]'>
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5 0.5H34.5V34.5H0.5V0.5Z" stroke="#BBE2EA" />
                                            <path d="M26.3438 7.84375H7.65625C7.20684 7.84375 6.84375 8.20684 6.84375 8.65625V27.3438C6.84375 27.7932 7.20684 28.1562 7.65625 28.1562H26.3438C26.7932 28.1562 27.1562 27.7932 27.1562 27.3438V8.65625C27.1562 8.20684 26.7932 7.84375 26.3438 7.84375ZM23.9977 13.7725H22.3752C21.1031 13.7725 20.8568 14.3768 20.8568 15.2654V17.223H23.8936L23.4975 20.2877H20.8568V28.1562H17.6906V20.2902H15.0424V17.223H17.6906V14.9633C17.6906 12.3404 19.2928 10.9109 21.6338 10.9109C22.7561 10.9109 23.7184 10.9947 24.0002 11.0328V13.7725H23.9977Z" fill="#DBF2F6" />
                                        </svg>
                                    </a>

                                    <a href='/#' className='hover:-translate-y-[10px] duration-[.3s]'>
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5 0.5H34.5V34.5H0.5V0.5Z" stroke="#BBE2EA" />
                                            <path d="M17.0993 14.6154C15.2214 14.6154 13.6889 16.1363 13.6889 18C13.6889 19.8636 15.2214 21.3845 17.0993 21.3845C18.9772 21.3845 20.5097 19.8636 20.5097 18C20.5097 16.1363 18.9772 14.6154 17.0993 14.6154ZM27.328 18C27.328 16.5984 27.3408 15.2095 27.2615 13.8105C27.1821 12.1855 26.8086 10.7433 25.6113 9.55505C24.4113 8.36423 22.9607 7.99607 21.3233 7.91736C19.911 7.83865 18.5116 7.85134 17.1019 7.85134C15.6896 7.85134 14.2901 7.83865 12.8804 7.91736C11.243 7.99607 9.78983 8.36677 8.59248 9.55505C7.39257 10.7459 7.02159 12.1855 6.94228 13.8105C6.86297 15.2121 6.87576 16.601 6.87576 18C6.87576 19.399 6.86297 20.7904 6.94228 22.1894C7.02159 23.8144 7.39513 25.2566 8.59248 26.4449C9.79239 27.6357 11.243 28.0039 12.8804 28.0826C14.2927 28.1613 15.6922 28.1486 17.1019 28.1486C18.5141 28.1486 19.9136 28.1613 21.3233 28.0826C22.9607 28.0039 24.4139 27.6332 25.6113 26.4449C26.8112 25.2541 27.1821 23.8144 27.2615 22.1894C27.3433 20.7904 27.328 19.4015 27.328 18ZM17.0993 23.2076C14.1955 23.2076 11.8519 20.8818 11.8519 18C11.8519 15.1181 14.1955 12.7924 17.0993 12.7924C20.0031 12.7924 22.3467 15.1181 22.3467 18C22.3467 20.8818 20.0031 23.2076 17.0993 23.2076ZM22.5616 13.7953C21.8836 13.7953 21.3361 13.2519 21.3361 12.5791C21.3361 11.9062 21.8836 11.3629 22.5616 11.3629C23.2396 11.3629 23.7871 11.9062 23.7871 12.5791C23.7873 12.7388 23.7557 12.8971 23.6942 13.0447C23.6327 13.1924 23.5424 13.3265 23.4286 13.4395C23.3148 13.5525 23.1796 13.6421 23.0308 13.7031C22.882 13.7642 22.7226 13.7955 22.5616 13.7953Z" fill="#DBF2F6" />
                                        </svg>
                                    </a>
                                </div>
                            </Disclosure.Panel>
                        </Disclosure>
                    </div>
                </div>
            </section>

            <section className='Location_email_ar'>
                <div className="hidden md:block">
                    <div className="Location_data flex gap-[10px] pb-[20px]">
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="#bbe2ea" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div className="">
                            <h2 className='pb-[16px] font-[700] text-[18px] text-[#B8DFE7] leading-[24px] font-["Ambroise_Demi"] tracking-[2px]'>
                                Location
                            </h2>
                            <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">Dip, The Park</p>
                            <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">Olney Road, Olney</p>
                            <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">MK46 5JZ</p>
                            <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">United Kingdom</p>
                        </div>
                    </div>
                </div>

                {/* For Mobile View Screen */}
                <div className="Location_data pb-[20px] block md:hidden">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className='W-[100%] flex items-center justify-between pb-[16px] w-[100%]'>
                                    <h2 className='flex items-center gap-[10px] font-[700] text-[18px] text-[#B8DFE7] leading-[24px] font-["Ambroise_Demi"] tracking-[2px]'>
                                        <span className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="#bbe2ea" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </span>
                                        Location
                                    </h2>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                    <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">Dip, The Park</p>
                                    <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">Olney Road, Olney</p>
                                    <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">MK46 5JZ</p>
                                    <p className="loaction_text font-['Nexa'] text-[14px] leading-[24px]">United Kingdom</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>



                <div className="hidden md:block">
                    <div className="email_data flex gap-[10px]">
                        <div className='min-w-[30px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="#bbe2ea" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div className="">
                            <h2 className='pb-[16px] font-[700] text-[18px] text-[#B8DFE7] leading-[24px] font-["Ambroise_Demi"] tracking-[2px]'>
                                Email
                            </h2>
                            <p className="loaction_text font-['Nexa']">support@wearedip.co</p>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <Disclosure>
                        <Disclosure.Button>
                            <div className="">
                                <h2 className='pb-[16px] font-[700] text-[18px] text-[#B8DFE7] leading-[24px] font-["Ambroise_Demi"] tracking-[2px] flex items-center gap-[10px]'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="#bbe2ea" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </span>
                                    Email
                                </h2>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <p className="loaction_text font-['Nexa']">support@wearedip.co</p>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            </section>
        </>
    )
}

export default FooterSection;