import React from 'react'
import Link from "next/link";
import Logo from "../public/logo.jpeg"
import Sidebar from './Sidebar';

const NavBar = () => {
    return (
        <div>
            <>
                <div className="w-full h-20 bg-black sticky top-0">
                    <div className="container ml-12 px-4 h-full">
                        <div className="flex justify-between items-center h-full">

                            <ul className="hidden md:flex gap-x-6 text-white">

                                <li>
                                    <Link href="/"><img src={Logo.src} alt="Logo" className="h-12" /></Link>
                                </li>
                                <li className='pt-3'>
                                    <Link href="/about">
                                        <p>About Us</p>
                                    </Link>
                                </li>
                                <li className='pt-3'>
                                    <Link href="/sustainability">
                                        <p>Sustainability</p>
                                    </Link>
                                </li>
                                <li className='pt-3'>
                                    <Link href="/contacts">
                                        <p>Contacts</p>
                                    </Link>
                                </li>


                            </ul>


                        </div>

                    </div>
                </div>
            </>


        </div>
    )
}

export default NavBar
