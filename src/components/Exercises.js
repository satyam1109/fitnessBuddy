import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import { Link } from 'react-router-dom'
import Ex_details from './Ex_details'

import { exercisename } from './Workout'
import { faDiagramNext } from '@fortawesome/free-solid-svg-icons'


export default function Exercises() {

    const [info, setinfo] = useState([])
    const txt = useContext(exercisename)

    const [i,seti]=useState(0)


    useEffect(() => {

        console.log("value received "+{txt})

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
    }, [])


    const handlenext=()=>{
        seti(i+18)
    }

    const handleprev=()=>{
        if(i>=36){
            seti(i-18)
        }
    }

    return (

        <div className='scroll_page'>

            <button onClick={handleprev} className='btn btn-primary'>Prev</button>

            {!info ? (
                <p>Loading.....</p>
            ) : (

                <div className='page custom-spacing row p-1'>

                    {

                        info.slice(0,18).map((temp, index) => {

                            if (temp.bodyPart ===`${txt}`){

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

            <button onClick={handlenext} className='btn btn-primary'>next</button>
        </div>

    )
}

