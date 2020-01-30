import React from 'react'
import camryprofile from '../images/camryprofile.JPG'
import rav4profile from '../images/rav4profile.JPG'
import lexusprofile from '../images/lexusprofile.JPG'

const CarPhotos = () => {
  const images = [camryprofile, rav4profile, lexusprofile]
  return <div>{console.log(images[0])}</div>
}

export default CarPhotos
