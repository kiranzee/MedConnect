"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({params}) {
  const [doctor, setDoctor] = useState();
  useEffect(()=>{
    getDoctorById();
  },[])
 const getDoctorById=()=>{
  GlobalApi.getDoctorById(params.recordId).then((res)=>{
    console.log(res.data.data);
     setDoctor(res.data.data);
  })
}
  return (
    <div className='p-5 md:px-1'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 md:grid-cols-4'>
        {/* Doctor Details */}
        <div className='col-span-3'>
         {doctor&&<DoctorDetails doctor={doctor}/>}

        </div>
        {/* Doctor suggestion */}
        <div>
          <DoctorSuggestionList/>

        </div>


      </div>
    </div>
  )
}

export default Details