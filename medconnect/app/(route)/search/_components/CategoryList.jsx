"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
  import Link1 from 'next/link';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
  
function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);

    const params = usePathname();
    const category = params.split('/')[2];
  useEffect(()=>{
    getCategoryList();
   // console.log(params);
  }, [])

  const getCategoryList =()=>{
    GlobalApi.getCategory().then(res=>{
      //console.log(res.data.data);
      setCategoryList(res.data.data);
    })
  }
  return (
    <div className='h-screen fixed mt-5 flex flex-col '>
       
       
       <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup >
    {categoryList&&categoryList.map((item, index)=>(
           
           <Link href={'/search/'+item.attributes.Name} key={index} className={`p-1 flex gap-1 text-[14px] text-blue-600 rounded-md cursor-pointer w-full items-center
             ${category==item.attributes.Name&&'bg-blue-300'}`}>
                   <Image src={item.attributes?.Icon?.data.attributes?.url}
                   alt='Icon' width={35} height={35} />
                   <label>{item.attributes.Name}</label>
               </Link> 
          
           
       ))}
    </CommandGroup>
    
  </CommandList>
</Command>
       
        </div>
  )
}

export default CategoryList