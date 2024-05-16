import React, { useState } from 'react'
import HeroSlider from 'react-slick'


const HeroCarousel = () => {
    const [images, setImages] = useState([]);
    var settingsLg = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <>
    <div className='lg:hidden'>
     <HeroSlider {...settings}>
        {
            images.map((image) => (
                <div className='w-full h-full md:h-80 py-3'>
                    <img src="https://image.tmdb.org/t/p/original/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg" alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
                </div>
            ))
        }
     </HeroSlider>
    </div>
    <div className='hidden lg:block'>
    <HeroSlider {...settingsLg}>
        {
            images.map((image) => (
                <div className='w-full h-full md:h-80 py-3'>
                    <img src="https://image.tmdb.org/t/p/original/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg" alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
                </div>
            ))
        }
     </HeroSlider>
    </div>
    </>
  )
}

export default HeroCarousel
