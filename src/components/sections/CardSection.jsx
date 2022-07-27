import React from 'react';


// Images
import thumb from '../../assets/thumbs-up.svg';
import Card_icon_1 from '../../assets/frame1.svg';
import Card_icon_2 from '../../assets/frame2.svg';
import Card_icon_3 from '../../assets/frame3.svg';


const CardSection = () => {

    const card_array = [
        {
            cardImages: thumb,
            cardText_1: 'Trusted by',
            cardText_2: 'Thousands Taking-A-Dip',
        },

        {
            cardImages: Card_icon_1,
            cardText_1: 'Hypoallergenic',
            cardText_2: 'Great for Sensitive Skin',
        },

        {
            cardImages: Card_icon_2,
            cardText_1: 'Natural',
            cardText_2: 'Plant Based Ingredients',
        },

        {
            cardImages: Card_icon_3,
            cardText_1: 'OECD-301B',
            cardText_2: 'Certified Biodegradable',
        }
    ]

    return (
        <section className="card_section float-left w-[100%]">
            <div className="container_ar">
                <div className="card_data w-[100%] flex justify-evenly flex-wrap py-[3rem]">
                    {
                        card_array.map((value) => {
                            return (
                                <a href='/#' className="card_data_1 text-center">
                                    <div className="car_image">
                                        <img className='m-[auto]' src={value.cardImages} alt="" />
                                    </div>
                                    <h4>{value.cardText_1}</h4>
                                    <p>{value.cardText_2}</p>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CardSection;