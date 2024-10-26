'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';

function Navigation() {
    const isUserLoggedIn=false;
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div className="container mx-auto p-4 bg-blue-50">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 bg-white p-8 ">
                    <p>Logo goes Here!</p>
                </div>
                <div className="flex-1 bg-white p-8 grid grid-cols-3 gap-4 content-start">
                    <div><Link href="/features">Features</Link></div>
                    <div><Link href="/pricing">Pricing</Link></div>
                    <div><Link href="/about">About Us</Link></div>                   
                </div>
                <div className="flex-1 bg-white p-4 grid grid-cols-3 gap-4 content-start">
                    <div></div>
                    <div>
                        <button className="flex items-start text-green-500 whitespace-nowrap">
                            <span className="gap-2.5 self-stretch px-5 py-2.5 rounded-md bg-slate-100">
                            Sign In
                            </span>
                        </button>
                    </div>
                    <div>
                        <button className="flex items-start text-green-500 whitespace-nowrap">
                            <span className="gap-2.5 self-stretch px-5 py-2.5 rounded-md bg-slate-100">
                            Login
                            </span>
                        </button>
                    </div>                    
                </div>                                

            </div>
        </div>
    )
}

export default Navigation;