import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorList({doctorList, heading='Popular Doctors'}) {
  return (
    <div className='mb-10 px-8'>
        <h2 className='font-bold text-xl'>{heading}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-7 mt-4'>
            {doctorList.length>0?doctorList.map((doctor,index) =>(
            <div className='border-[1px] rounded-lg p-3
            cursor-pointer hover:border-primary
            hover:shadow-sm'
            key={index}>
                <Image src={doctor.attributes?.Image?.data?.attributes?.url} 
                alt='doctor'
                width={150}
                height={50}
                className='h-[200px] w-full object-cover rounded'
                />
                <div className='mt-3 items-baseline flex flex-col grap-1' >
                  <Link href={'/details/'+doctor?.id} className='w-full'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                    px-2 text-primary'>{doctor.attributes?.category?.data?.attributes?.Name}</h2>
                    <h2 className='font-bold'>{doctor.attributes.Name}</h2>
                    <h2 className='text-primary text-sm'>{doctor.attributes.Year_of_Experience}</h2>
                    <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
                    <h2 className='p-2 px-3 border-[1px] border-primary
                    text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer
                    hover:bg-primary hover:text-white'>Book Now</h2></Link>
                </div>
            </div>
                ))
              :
              [1,2,3,4,5,6].map((item, index)=>(
              <div className='h-[220px] bg-slate-100 w-full
              animate-pulse'>

              </div>))}
              
        </div>
    </div>
  )
}

export default DoctorList