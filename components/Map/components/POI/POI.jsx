import Image from 'next/image'
import React from 'react'
const poiImage=  '/IceSkating.png';

function POI() {
  return (
    <React.Fragment>
        <div>
           <Image 
           src={poiImage} 
           alt="Picture of the author" 
           width={50}
           height={50}
           />
           <p>poi</p>
        </div>
      </React.Fragment>
  )
}

export default POI