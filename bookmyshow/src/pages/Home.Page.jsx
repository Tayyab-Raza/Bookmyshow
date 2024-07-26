import React, { useState } from 'react'
import Defaultlayout from '../Layouts/Default.layout'


// Components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component'
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component'

const HomePage = () => {
  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);


  return (
    <>
    <HeroCarousel />
    <div className='contaner mx-auto px-4 md:px-12 my-8'>
    <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The best of Entertainment</h1>
    <EntertainmentCardSlider />
    </div>

    <div className='contaner mx-auto px-4 md:px-12 my-8'>
    <PosterSlider 
    title = "Recommended Movies"
    poster = {recommendedMovie}
    isDark = {false}
    />
    </div>

    <div className='bg-premier-800 py-12'>
      <div className='contaner mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Rupay" className='w-full h-full' />
        </div>
        <PosterSlider 
    title = "Premieres"
    subtitle = "Brand New releases every friday"
    poster = {premierMovies}
    isDark = {true}
    />
      </div>
    </div>
   
   <div className='contaner mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
   <PosterSlider 
    title = "Online Streaming Events"
    subtitle = "Brand New online streaming events"
    poster = {onlineStreamEvents}
    isDark = {false}
    />
   </div>
    </>
  )
}

export default Defaultlayout(HomePage)
