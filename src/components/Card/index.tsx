import React from 'react';
import Button from '../Button';
import Input from '../Input';
import logo from '../../assets/weduk-logo.png'

const Card = () => {
  const formData = [
    {
      name: 'Age group',
      type: 'number'
    },
    {
      name: 'School absences',
      type: 'text'
    },
    {
      name: 'Financial condition',
      type: 'text'
    },
    {
      name: 'Internet type',
      type: 'text'
    }
  ]
  return (
    <div className=' bg-white dark:bg-slate-900 flex flex-col items-center justify-center border border-sky-900 gap-4 p-4	 shadow-md rounded-md select-none  w-full md:w-1/2 lg:w-1/2 '>

      <header className='flex flex-col gap-5 text-center'>
        <img src={logo} alt="logo's company" className='h-24 ' />
        <h1 className='text-sky-500 font-semibold uppercase text-xl'>fill in your information</h1>
      </header>

      <form action="" id="form" className='flex flex-col items-center justify-center gap-8 w-2/3 '>
        {formData.map(item => {
          return (
            <div className='flex flex-col w-full gap-2 '>
              <label htmlFor="">{item.name}</label>
              <Input placeholder={item.type} />
            </div>

          )
        })}

        <Button placeholder='Send' type='submit' />
      </form>

    </div>
  )
}

export default Card