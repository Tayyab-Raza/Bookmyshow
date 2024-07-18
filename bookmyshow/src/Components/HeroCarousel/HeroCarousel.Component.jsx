import HeroSlider from 'react-slick'
import herocs1 from '../images/herocs1.avif'
import herocs2 from '../images/herocs2.avif'
import herocs3 from '../images/herocs3.avif'



const HeroCarousel = () => {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
    
  return (
    <>
    <div className='slider-container'>
     <HeroSlider {...settings}>
       
               <div className='w-full h-56 md:h-80 py-3 ml-9'>
               <h3><img className='img1 ml-5' src={herocs1} alt="" /></h3>
             </div>
             <div className='w-full h-56 md:h-80 py-3 ml-9'>
               <h3><img className='img2 ml-5' src={herocs2} alt="" /></h3>
             </div>
             <div className='w-full h-56 md:h-80 py-3 ml-9'>
               <h3><img className='img3 ml-5' src={herocs3} alt="" /></h3>
             </div>
             
        
     </HeroSlider>
    </div>
        </>
  )
}

export default HeroCarousel
