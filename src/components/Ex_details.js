import React, { useEffect, useState,createContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './style.css'

import body from '../images/body.png'
import bicep from '../images/bicep.png'
import equipm from '../images/equip.png'

import Youtube from './Youtube'
import SimilarEx from './SimilarEx'
import EquipmentEx from './EquipmentEx'

const datacontext = createContext();

export default function Ex_details() {

    const { id } = useParams();

    const [info, setinfo] = useState([])
    let name=null;
    let part=null;
    let equip=null;

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            headers: {
                // 'X-RapidAPI-Key': '4c53314ac9msh90dbff18616c628p1da403jsn93f4e3e6bca7',
                'X-RapidAPI-Key': '0518f51629msh89037d1af016eeep1a52f3jsn68e63b85e907',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            axios.request(options)
                .then((response) => {
                    console.log("dats is successful")
                    console.log(response)
                    setinfo(response.data)
                })
        } catch (error) {
            console.error(error);
        }
    }, [])

    if(info){
        name=info.name;
        part=info.bodyPart;
        equip=info.equipment;
    }

    return (
        <div className='ex_page'>
            <div className='ex_det row p-1'>
                <div className='ex_img_div col-sm-6'>
                <img className='ex_img img-fluid' src={info.gifUrl} alt="image" />
                </div>
                

                <div className='col'>

                    <div className='ex_name mt-2'>
                        <h1>{info.name}</h1>
                    </div>

                    <div className='mt-5'>
                        <p><i><b>{info.name}</b></i> is one of the best exercise for your<i><b>{info.bodyPart}</b></i></p>
                        <p>This Exercise directly targets the <i><b>{info.target}</b></i> muscle and is performed using <i><b>{info.equipment}</b></i></p>
                    </div>

                    <div className='ex_detail mt-3'>

                        <div className='icon_desc m-2'><img src={body} className='icon_img'/><h4 className='d-flex'> {info.bodyPart}</h4></div>
                        
                        <div className='icon_desc m-2'><img src={bicep} className='icon_img'/><h4 className='d-flex'> {info.target}</h4></div>
                        
                        <div className='icon_desc m-2'><img src={equipm} className='icon_img'/><h4 className='d-flex'> {info.equipment}</h4></div>
                    </div>
                </div>
                
                
            </div>
            <datacontext.Provider value={{name,part,equip}}>
                <Youtube/>
                <SimilarEx/>
                <EquipmentEx/>
            </datacontext.Provider>
            
        </div>
    )
}

export {datacontext}