import React, { useState } from 'react'
import Defaultlayout from '../Layouts/Default.layout'


// Components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);


  return (
    <>
    <HeroCarousel />
    </>
  )
}

export default Defaultlayout(HomePage)
