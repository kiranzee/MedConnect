"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
function Header() {
    const {user} = useKindeBrowserClient();

    useEffect(() => {
        console.log(user);
    },[user])


    const Menu =[{
        id:1,
        name:'Home',
        path:'/'
    },
    {
        id:2,
        name:'About Us',
        path:'/'
    },{
        id:3,
        name:'Contact Us',
        path:'/'
    },]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-8'>
            <Image src='/logo.svg' alt='logo' width={180} height={80} />

            <ul className='md:flex gap-4 hidden'>
                {Menu.map((item,index)=>(
                    <Link href={item.path}>                    <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                    </Link>
                    ))}
                    
            </ul>
        </div>
        {user?
       
        <Popover>
  <PopoverTrigger> <Image src={user?.picture} 
        alt='profile-image'
        width={40} height={40} className='rounded-full'
        /></PopoverTrigger>
  <PopoverContent className='w-44'>
    <ul className='flex flex-col gap-2'>
        <li className='hover:text-primary cursor-pointer hover:scale-105
                transition-all ease-in-out'>
            
                Profile
           
        </li>
        <Link href={'/my-booking'} className='hover:text-primary cursor-pointer hover:scale-105
                transition-all ease-in-out'>
            
                My Bookings
           
        </Link>
        <li className='hover:text-primary cursor-pointer hover:scale-105
                transition-all ease-in-out'>
            
            <LogoutLink>Logout</LogoutLink>
           
        </li>
    </ul>
  </PopoverContent>
</Popover>

        
        :
        <LoginLink><Button>Get Started</Button></LoginLink>
    }        
    </div>
  )
}

export default Header