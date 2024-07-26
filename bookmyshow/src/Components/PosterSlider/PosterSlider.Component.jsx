import React from 'react'
import Poster from '../Poster/Poster.Component'
import Slider from 'react-slick'

const PosterSlider = (props) => {

  const {posters, title, subtitle, isDark} = props;

  const settings = [];

  return (
   <>
   <div className='flex flex-col itmes-start sm:ml-3 my-2'>
    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
    <p className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}> {subtitle}</p>
   </div>
   </>
  )
}

export default PosterSlider
