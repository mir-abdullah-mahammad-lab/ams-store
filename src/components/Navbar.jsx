import Image from 'next/image';
import React from 'react';
import logo from '../../public/compaly-logo.png'
import Link from 'next/link';


const Navbar = () => {
    return (
        <div>
            
          <div className="navbar bg-linear-to-r from-sky-500 via-black to-indigo-500 shadow-sm">
  <div className="navbar-start">
    
    <Image
    src={logo}
    alt={'logo'}
    width={80}
    height={80} className='rounded-full bg-base-300'></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1L flex justify-between items-center gap-3 ">
      <button className='btn btn-active'> <Link href={'/'}>Home</Link></button>
      <button className='btn btn-active'><Link href={'/products'}>Product</Link></button>
      <button className='btn btn-active'> <Link href={'/profile'}>Profile</Link></button>  
     </ul>
  </div>
  <div className="navbar-end">
    <button className='btn btn-active'><Link href={'/sign-in'}>Sign-in</Link></button>

  </div>
</div>
        </div>
    );
};

export default Navbar;