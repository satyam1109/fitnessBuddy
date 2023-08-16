import Reac, { useEffect, useState } from 'react'
import './pages.css'
import vid1 from '../images/vid1.mp4'

export default function Practise() {


    return (
        <div className=''>
            <video src={vid1} autoPlay loop muted/>
        </div>

    )
}
