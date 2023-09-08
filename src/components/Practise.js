import React, { useEffect } from 'react'

export default function Practise() {

  const fetchApi = async () => {

    const url= 'https://world.openfoodfacts.net/api/v2/product/3017624010701?fields=eggs,nutriscore_data'

    try {
      const response = await fetch(url);
      console.log("food data fetched")
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <div>

    </div>
  )
}
