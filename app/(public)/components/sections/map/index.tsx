import SectionContainer from '@/components/section-container'
import React from 'react'
import GoogleMaps from '../Reviews/GoogleMaps'
import barber from '@/data'
import Marquee from 'react-fast-marquee'
import AnimateElement from '@/components/animated-element'

export default function Map() {
  return (
    <SectionContainer id="map" className="space-y-4 ">
        <div className="flex flex-col gap-4 text-center">
        <AnimateElement element="span"  className="font-bold text-neutral-400 ">FIND US AT {barber.location[0]}</AnimateElement>
        <AnimateElement element="span" className="font-bold text-white text-6xl">FINDS US</AnimateElement>
      </div>
      <AnimateElement animate={{ y: [60, 0], opacity: [0, 1], transition: { duration: 1 } }}>
        <GoogleMaps />

      </AnimateElement>
      <AnimateElement>

        <Marquee className='text-6xl font-black overflow-y-hidden uppercase'>
{` VISIT US | ${barber.location[0]} | ${barber.number} | ${barber.email} | `} 

</Marquee>
      </AnimateElement>
    </SectionContainer>
  )
}
