import React from 'react'
// db
import db from "./dbLinks.json";

export default function AboutUs() {

    const main_copy_1 = db.Texts['main-bio-1'].ita; 
    const main_copy_2 = db.Texts['main-bio-2'].ita; 

  return (
    <div className='min- h -lvh flex flex-col items-center py-[50px] px-[30px]'>
      <h1 className='text-4xl font-maru font-extrabold text-oyoya-purple'>Chi Siamo</h1>
      <p className='text-[1.2rem] indent-5 mt-[30px]'>{main_copy_1}</p>
      <p className='text-[1.2rem] indent-5 mt-[30px]'>{main_copy_2}</p>
</div>
  )
}
