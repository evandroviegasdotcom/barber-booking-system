import SubTitle from '@/components/ui/sub-title'
import Title from '@/components/ui/title'
import React from 'react'


type StepContainerProps = {
    children: React.ReactNode 
    title: string 
    subtitle?: string
}
export default function StepContainer({ children, title, subtitle }: StepContainerProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-24 ">
    <div className="flex flex-col items-center gap-2">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
    {children}

  </div>
  )
}
