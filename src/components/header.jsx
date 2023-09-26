import React from 'react'

function Header() {
  return (
    <header>
      <nav className='flex-row  flex bg-gradient-to-r from-custom-bg_header_first via-custom-bg_header_second to-custom-bg_header_third p-6'>
        <p className='flex text-3xl font-bold'>My Todo!</p>
        <ul className='flex flex-row ml-auto p-2'>
          <a className='px-4 text-base hover:font-bold' href="">List Todo</a>
          <a className='px-4 text-base hover:font-bold' href="">Create Todo</a>
          <a className='px-4 text-base hover:font-bold' href="https://www.rioxiu.my.id">About Me</a>
        </ul>
      </nav>
    </header>
  )
}

export default Header