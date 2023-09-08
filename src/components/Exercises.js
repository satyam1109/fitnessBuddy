import React, {useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import './pages.css'
import { Link } from 'react-router-dom'
import Ex_details from './Ex_details'

import cardio from '../images/cardio.png'
import abs from '../images/abs.jpg'
import chest from '../images/chest.jpg'
import back from '../images/back.jpg'
import shoulder from '../images/shoulder.jpg'
import upparm from '../images/upparm.jpg'
import lowarms from '../images/lowarms.jpg'
import upplegs from '../images/upplegs.jpg'
import lowlegs from '../images/lowlegs.jpg'


export default function Exercises(props) {

    const [info, setinfo] = useState([])
    const [txt,settxt]=useState('cardio')

    const [count, setcount] = useState(0)


    useEffect(() => {

        console.log("button selected ")
        console.log(txt)

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${txt}`,
            headers: {
                // 'X-RapidAPI-Key': '4c53314ac9msh90dbff18616c628p1da403jsn93f4e3e6bca7',
                'X-RapidAPI-Key': '0518f51629msh89037d1af016eeep1a52f3jsn68e63b85e907',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            axios.request(options)
                .then((response) => {
                    console.log("dats is successful for ")
                    console.log(txt)
                    console.log(response.data)
                    setinfo(response.data)
                })
        } catch (error) {
            console.error(error);
        }
    }, [txt])



    return (

        <>
            <div className='m-3'><h3 className='display-4'>Checkout the most Effective Exercises <span className='display-3' style={{ color: "rgb(79, 86, 183)"}}>Personalised to You</span></h3></div>
            <h1 className='m-3'>Select the Body Part</h1>

            <div className='muscle_icon_div mt-4'>

                <div onClick={() => {settxt('cardio')}}>
                    <img src={cardio} className='musc_img'/>
                    <h6>cardio</h6>
                </div>
                <div onClick={() => {settxt('waist')}}>
                <img src={abs} className='musc_img'/>
                <h6>Waist</h6>
                </div>
                <div onClick={() => {settxt('chest')}}>
                <img src={chest} className='musc_img'/>
                    <h6>Chest</h6>
                </div>
                <div onClick={() => {settxt('back')}}>
                <img src={back} className='musc_img'/>
                    <h6>Back</h6>
                </div>
                <div onClick={() => {settxt('shoulders')}}>
                <img src={shoulder} className='musc_img'/>
                    <h6>Shoulders</h6>
                </div>
                <div onClick={() => {settxt('upper arms')}}>
                <img src={upparm} className='musc_img'/>
                    <h6>Upper Arms</h6>
                </div>
                <div onClick={() => {settxt('lower arms')}}>
                <img src={lowarms} className='musc_img'/>
                    <h6>Lower Arms</h6>
                </div>
                <div onClick={() => {settxt('upper legs')}}>
                <img src={upplegs} className='musc_img'/>
                    <h6>Upper Legs</h6>
                </div>
                <div onClick={() => {settxt('lower legs')}}>
                <img src={lowlegs} className='musc_img'/>
                    <h6>Lower Legs</h6>
                </div>
            </div>

            <div className='mt-4 p-4'><h3 className='display-4'>Exercises for  - <span style={{ color: "rgb(79, 86, 183)"}}>{txt}</span></h3></div>

            <div className='scroll_page'>

               
                <button onClick={()=>{ if(count>=18){setcount(count-18)}}} className='btn btn-primary'>Prev</button>

                {!info ? (
                    <p>Loading.....</p>
                ) : (

                    <div className='page custom-spacing row p-1'>

                        {

                            info.slice(count,count+18).map((temp, index) => {

                                if (temp.bodyPart === `${txt}`) {

                                    return (
                                        <div className='ex_card col-sm-6 col-md-4 col-lg-3 m-1 mb-3'>

                                            <Link to={`/ex_details/${temp.id}`} target="_blank">
                                                <div className='image' >
                                                    <img src={temp.gifUrl} alt="image" className='pop-in col-sm-6 col-md-12 col-lg-12' />
                                                </div>
                                            </Link>


                                            <div>
                                                <h5 className='exname'>{temp.name}</h5>
                                            </div>

                                            <div className='desc'>
                                                <h6 className='bp'>{temp.bodyPart} , </h6>
                                                <h6 className='targ'>{temp.target}</h6>
                                            </div>


                                        </div>

                                    )
                                }



                            })
                        }

                    </div>

                )
                }

                <button onClick={()=>{if(count<info.length-18){setcount(count+18)}}} className='btn btn-primary'>next</button>
            </div>

        </>

    )
}

