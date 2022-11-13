import React from 'react';
import Button from '../Button';
import Input from '../Input';

const Card = (prop: { title: string; }) => {
  return (
    <div className='flex flex-col items-center justify-center border border-sky-900 gap-4 w-1/2 p-4	bg-slate-800 shadow-md rounded-md py-2 px-3 select-none cursor-pointer transition-all hover:bg-blue hover:text-black '>
      <div id="header">
        <h1 className='text-sky-500 font-semibold uppercase'> {prop.title} </h1>

      </div>

      <form action="" id="form" className='flex flex-col items-center justify-center gap-8 w-full '>
        <Input placeholder='Write a text' />
        <Input placeholder='Write a text' />

        <Button placeholder='Send' type='submit' />
      </form>

    </div>
  )
}

export default Card