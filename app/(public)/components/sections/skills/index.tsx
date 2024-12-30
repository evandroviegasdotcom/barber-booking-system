import SectionContainer from '@/components/section-container'
import React from 'react'
import skills from './data'
import AnimateElement from '@/components/animated-element'

export default function Skills() {
  return (
    <SectionContainer id='skills' className='responsive'> 
        {skills.map((s, idx) => (
            <AnimateElement
            animate={{ opacity: [0, 1], y: [-40, 0], transition: { duration: idx * 0.1 + 0.5, type: "just" } }}
            key={s.title} className='space-y-6'>
                <span className='text-4xl'>{s.icon}</span>
                <span className='font-semibold text-2xl'>{s.title}</span>
                <p className='font-red text-neutral-400'>{s.description}</p>
            </AnimateElement>
        ))}
    </SectionContainer>
  )
}
