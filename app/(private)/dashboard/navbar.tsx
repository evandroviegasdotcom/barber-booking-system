import UserAvatar from '@/components/user-avatar'
import barber from '@/data'
import React from 'react'

export default function Navbar() {
  return (
    <div className='p-4 border-b border-b-zinc-900 flex justify-between'>
        <span className='text-4xl font-bold'>{barber.name}</span>
        <UserAvatar />
    </div>
  )
}
