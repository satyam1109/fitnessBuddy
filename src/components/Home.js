import React, { useState, useEffect } from 'react'
import './pages.css'
import vid2 from '../images/vid2.mp4'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Workout from '../components/Workout';
import Exercises from './Exercises'

export default function Home() {

  const [counteron, setcounteron] = useState(false)

  return (
    <>
      <div className='div1'>

        <div className='slogan'>
          <h1 className='slog_head' data-aos="fade-right" data-aos-duration="1200" data-aos-offset="100">Fitness Buddy </h1>
          <h2 className='slog_txt' data-aos="fade-left" data-aos-duration="1200" data-aos-offset="100">Your Partner in Transformation Journey</h2>
        </div>

      </div>

      <div className='div2'>

        <div className='div2_cnt'>
          <h1 className='div2_slog' data-aos="fade-left" data-aos-duration="1200" data-aos-offset="100">A Complete Solution To Your Overall Fitness and Transformaton Goals</h1>

          

            {/* <h1>Counter </h1> */}

            <ScrollTrigger onEnter={() => setcounteron(true)} onExit={() => setcounteron(false)}>

            <div className='counter'>
              <div className='count1'>
              <i class="bi bi-bag-check-fill display-6"></i>
                <h1>
                  {counteron && <CountUp start={0} end={2000} duration={2} />}+
                </h1>
                <h3 className='mt-4'>Exercises</h3>
              </div>

              <div className='count1' >
                <i class="bi bi-person-check-fill display-6"></i>
                <h1>
                  {counteron && <CountUp start={0} end={500} duration={2} />}+
                </h1>
                <h3 className='mt-4'>Clients</h3>
              </div>

              <div className='count1 pb-5'>
              <i class="bi bi-cart3 display-6"></i>
                <h1>
                  {counteron && <CountUp start={0} end={100} duration={3} />}+
                </h1>
                <h3 className='mt-4'>Diet Plans</h3>
              </div>
            </div>

            </ScrollTrigger>
        </div>
        <video src={vid2} autoPlay loop muted />
      </div>

      {/* <Exercises /> */}

    </>

  )
}
