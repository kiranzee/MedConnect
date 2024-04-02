"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, UserSearch } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList()
  }, [])

  const getCategoryList =()=>{
    GlobalApi.getCategory().then(res=>{
      //console.log(res.data.data);
      setCategoryList(res.data.data);
    })
  }
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'> Doctors</span></h2>
        <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one click</h2>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-3 ps-3 pr-3">
            <Input type="text" placeholder="Search..." />
            <Button type="submit">
                
                <UserSearch className='h-4 w-4 mr-2'/>
                Search</Button>
        </div>
        {/* Display List of Category */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
        {categoryList.length>0?categoryList.map((category, index) => index<6&& (
          <Link href={'/search/'+category.attributes.Name} key={index} className='flex flex-col
          text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2
          hover:scale-110 transition-all ease-in-out cursor-pointer'>
          <Image
            src={category.attributes?.Icon?.data?.attributes?.url}
            alt='Icon'
             width={60}
            height={60}
          />
          <label className='text-blue-600 text-sm'>{category.attributes?.Name} </label>
        </Link>))
      :
      [1,2,3,4,5,6].map((item,index)=>(
      <div className='h-[130px] w-[130px] bg-slate-200 m-2
      animate-pulse'>

      </div>))
        
      
      }
        </div>
        </div>
  )
}

export default CategorySearch