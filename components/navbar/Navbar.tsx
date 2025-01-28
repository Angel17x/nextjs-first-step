import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react'
import { ActiveLink } from '../';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/pricing', text: 'Pricing' }
]

export const Navbar = () => {

  console.log('Navbar component');

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link className='flex items-center' href='/'>
        <HomeIcon />
        <span className='ml-2'>Home</span>
      </Link>
      <div className='flex flex-1'></div>
      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
