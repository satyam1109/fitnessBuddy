import React, {useState,createContext, useEffect} from 'react'
import Exercises from './Exercises';

const exercisename = createContext();

export default function Workout() {

  let exer='cardio';

  const [txt,settxt]=useState('cardio')

  const [muscle,setmuscle]=useState('')
  // const [istrue,setistrue]=useState(false)


  useEffect(()=>{
    console.log("value selected now is ")
    console.log(txt)
    setmuscle(txt)
  },[txt])

  // const body_parts=['cardio','waist','back','chest','lower legs','upper legs','shoulders','lower arms','upper arms']

  const handlebuttonclicked=(part)=>{
    settxt(part)
    exer=part
  }


  return (
    <div>
      <h1>Select the body part</h1>

      <button onClick={()=>handlebuttonclicked('cardio')}>cardio</button>
      <button onClick={()=>handlebuttonclicked('waist')}>waist</button>
      <button onClick={()=>handlebuttonclicked('back')}>back</button>
      <button onClick={()=>handlebuttonclicked('chest')}>chest</button>
      <button onClick={()=>{exer='shoulders';settxt('shoulders')}}>Shoulders</button>

      
      {/* <button onclick={}>lower legs</button>
      <button onclick={clickupplegs}>upper legs</button>
      <button onclick={clickcardio}>cardio</button>
      <button onclick={clickcardio}>cardio</button> */}

      {/* <input placeholder='enter the body part' onChange={(event) => { settxt(event.target.value);setistrue(false) }}/>
      <button onClick={searchExercise}>search</button> */}

     
      
        {/* <Exercises data={txt}/> */}
        <exercisename.Provider value={exer}>
          <Exercises/>
        </exercisename.Provider>
      
    </div>
  )
}

export {exercisename}