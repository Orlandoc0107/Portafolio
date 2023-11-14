import React from 'react'
import { Github, Linkedin,  Email } from '../ui/components/images/icons'

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-600
    dark:bg-zinc-900">
    <div className="
    bg-white 
    p-10 
    rounded 
    shadow-md w-96
    dark:bg-indigo-900
    ">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className='flex gap-5 justify-center'>
        <div>
          <Github/>
        </div>
        <div>
          <Linkedin/>
        </div>
        <div>
          <Email/>
        </div>
      </div>
      <br/>
      <div>
        <h4>Argentina / Misiones</h4>
      </div>
    </div>
  </div>
  )
}
