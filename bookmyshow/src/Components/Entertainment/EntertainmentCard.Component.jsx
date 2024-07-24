import React from 'react'
import card1 from '../images/card1.avif'
import card2 from '../images/card2.avif'
import card3 from '../images/card3.avif'
import card4 from '../images/card4.avif'
import card5 from '../images/card5.avif'
import card6 from '../images/card6.avif'
import card7 from '../images/card7.avif'
import card8 from '../images/card8.avif'
import card9 from '../images/card9.avif'
import card10 from '../images/card10.avif'
import pslider1 from '../images/pslider1.avif'
import Slider from "react-slick";

const EntertainmentCardSlider = () => {

        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        };

  return (
    <>
      
    <div className="slider-container">
      <Slider {...settings}>

 
        {/* Card1 */}
        <div className='card1 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card1} alt="" />
    </a>
    <div class="p-2">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Accident or Conspiracy: Godhra</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Drama</p>
    </div>
</div>
        </div>


{/* Card2 */}
        <div className='card2 pr-2'>
          <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" >
        <img class="card2 rounded-lg" src={card2} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Bad Newz</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comedy/Drama</p>
    </div>
</div>
        </div>



        {/* Card3 */}
        <div className='card3 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card3 rounded-lg" src={card3} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Kalki 2898 AD</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Action/Sci-Fi/Thriller</p>
    </div>
</div>
        </div>



        {/* Card4 */}  
        <div className='card4 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card4 rounded-lg" src={card4} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Deadpool Wolverine</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Action/Adventure/Comedy</p>
    </div>
</div>
        </div>



{/* Card5 */} 
        <div className='card5 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card5 rounded-lg" src={card5} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Twisters</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Action/Adventure/Thriller</p>
    </div>
</div>
        </div>



        {/* Card6 */} 
        <div className='card6 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card6} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Kill</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Action/Thriller</p>
    </div>
</div>
        </div>



        {/* Card7 */} 
        <div className='card7 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card7} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Sarphira</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biography/Drama</p>
    </div>
</div>
        </div>


        {/* Card8 */} 
        <div className='card8 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card8} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Despicable Me 4</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Action/Animation/Adventure</p>
    </div>
</div>
        </div>



        {/* Card9 */} 
        <div className='card9 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card9} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Munjya</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comedy/Horror</p>
    </div>
</div>
        </div>



        {/* Card10 */} 
        <div className='card10 pr-2'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="card1 rounded-lg" src={card10} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hindustani 2</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Action/Drama/Thriller</p>
    </div>
</div>
        </div>

      </Slider>
    </div>



    <div className='container pt-20'>
    <div>
      <a href="#">
        <img src={pslider1} alt="" />
      </a>
    </div>
    <div className='text-2xl font-bold text-gray-800 sm:ml-3 my-3 pt-20'>The best of live Events</div>
    <div className='sm:ml-3 my-3 flex gap-5'>
    <a href="#">
        <img src="../Images/ps1.avif" alt="" className='rounded-lg'/>
      </a>

      <a href="#">
        <img src="../Images/ps2.avif" alt=""  className='rounded-lg'/>
      </a>

      <a href="#">
        <img src="../Images/ps3.avif" alt=""  className='rounded-lg'/>
      </a>

      <a href="#">
        <img src="../Images/ps4.avif" alt=""  className='rounded-lg'/>
      </a>

      <a href="#">
        <img src="../Images/ps5.avif" alt=""  className='rounded-lg'/>
      </a>

    </div>
   </div>

    </>
  )
}

export default EntertainmentCardSlider

