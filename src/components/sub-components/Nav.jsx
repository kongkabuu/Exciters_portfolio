import React from 'react'

function Nav() {
    return (
        <nav className=' flex  justify-between fixed w-screen'>
            <div className='m-2 p-2 basis-1/7 bg-gray-100'>
                Logo
            </div>

            <ul className='flex m-2 p-2 basis-2/5 justify-between items-center hover:text-rose-600 '>
                <li> <a href='aboutus'>About us</a></li>
                <li> <a href='services'>Our services</a></li>
                <li> <a href='testimonials'>Testimonials</a></li>
            </ul>



            <a href="contact" className='basis-1/7 hover:p-4  p-3 my-2 mx-8 rounded-lg text-center  bg-gradient-to-r from-rose-300 to-rose-500 hover:gradient-to-l from-rose-600 to-rose-300 '>
                Get in touch
            </a>



        </nav>
    )
}

export default Nav
