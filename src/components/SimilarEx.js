import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import './style.css'
import { datacontext } from './Ex_details'
import { Link } from 'react-router-dom'


export default function SimilarEx() {

    const [info, setinfo] = useState([])

    const { name, part } = useContext(datacontext)

    const fetchSimilardata = async () => {

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`,
            headers: {
                // 'X-RapidAPI-Key': '4c53314ac9msh90dbff18616c628p1da403jsn93f4e3e6bca7',
                'X-RapidAPI-Key': '0518f51629msh89037d1af016eeep1a52f3jsn68e63b85e907',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("similar data fetched for ")
            console.log(part)
            console.log(response.data);
            setinfo(response.data)

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if (part !== undefined) {
            fetchSimilardata();
        }

    }, [part])

    return (
        <div>
            <h2 className='left'>Other Similar Exercises for <span style={{ color: "rgb(79, 86, 183)"}}>{part}</span></h2>
            {!info ? (
                <p className='text-center'>Loading...</p>
            ) : (
                <div className='similar_ex'>

                    {
                        info.slice(1, 13).map((temp, index) => {
                            return (
                                <div className='ex_card scroll_div'>

                                    <Link to={`/ex_details/${temp.id}`} target="_blank">
                                        <div className='image' >
                                            <img src={temp.gifUrl} alt="image" className='img_scroll' />
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
                        })
                    }

                </div>
            )}
            <div className='d-flex justify-content-center'>
                <span><i class="bi bi-arrow-left display-5"></i></span>
                <span><i class="bi bi-arrow-right display-5"></i></span>
            </div>
        </div>
    )
}
