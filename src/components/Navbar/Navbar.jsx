import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext} from '../Context/UserContext'
import { CounterContext } from '../Context/CounterContext'

export default function Navbar() {
    let { counter } = useContext(CounterContext)
    let {userLogin} = useContext(UserContext)
    return <>
        <nav className='bg-slate-300 md:flex md:fixed start-0 top-0 end-0 py-2 px-2'>
            <div className='container m-auto md:flex justify-between max-w-6xl'>
                <div className='md:flex md:w-fit justify-between'>
                    <h1 className='text-xl'><i className='fa fa-cart-shopping text-green-500'></i>Fresh Cart</h1>
                    <ul className="text-center md:flex">
                        {userLogin != null ? <> <li><NavLink className='mx-2 text-slate-700 py-1' to='/'>Home</NavLink></li>
                            <li><NavLink className='mx-2 text-slate-700 py-1' to='/products'>Products</NavLink></li>
                            <li><NavLink className='mx-2 text-slate-700 py-1' to='/brands'>Brands</NavLink></li>
                            <li><NavLink className='mx-2 text-slate-700 py-1' to='/cart'>Cart</NavLink></li></> : null}
                    </ul>
                </div>
                <div>
                    <ul className="text-center md:flex">
                        {userLogin === null ? <><li><NavLink className='mx-2 text-slate-700 py-1' to='/register'>Register</NavLink></li>
                            <li><NavLink className='mx-2 text-slate-700 py-1' to='/login'>Login</NavLink></li></> : <li><NavLink className='mx-2 text-slate-700 py-1' to='/logout'>Logout</NavLink></li>}


                        <ul className='flex justify-center'>
                            <li><i className='mx-2 py-1 fab fa-facebook'></i></li>
                            <li><i className='mx-2 py-1 fab fa-tiktok'></i></li>
                            <li><i className='mx-2 py-1 fab fa-youtube'></i></li>
                            <li><i className='mx-2 py-1 fab fa-linkedin'></i></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
