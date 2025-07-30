import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav className='bg-slate-300 md:flex md:fixed start-0 top-0 end-0 py-2 px-2'>
            <div className='container m-auto md:flex justify-between max-w-6xl'>
                <div className='md:flex md:w-fit justify-between'>
                    <h1 className='text-xl'><i className='fa fa-cart-shopping text-pink-500 pe-2'></i>Fresh Cart</h1>
                    <ul className="text-center md:flex">
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/'>Home</NavLink></li>
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/products'>Products</NavLink></li>
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/brands'>Brands</NavLink></li>
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/cart'>Cart</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-center md:flex">
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/register'>Register</NavLink></li>
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/login'>Login</NavLink></li>
                        <li><NavLink className='mx-2 text-slate-700 py-1' to='/logout'>Logout</NavLink></li>
                        <ul className='flex justify-center'>
                            <li><a href="https://www.facebook.com/"><i className='mx-2 py-1 fab fa-facebook text-blue-500'></i></a></li>
                            <li><a href="https://www.tiktok.com/"><i className='mx-2 py-1 fab fa-tiktok'></i></a></li>
                            <li><a href="https://www.Youtube.com/"><i className='mx-2 py-1 fab fa-youtube text-red-500'></i></a></li>
                            <li><a href="https://www.Linkedin.com/"><i className='mx-2 py-1 fab fa-linkedin text-blue-600'></i></a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
