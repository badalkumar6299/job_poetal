import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {
    const [title,setTitle]=useState('');
    const [location, setLocation]=useState('Bangalore');
    const [category, setCategory]=useState('Programming');
    const [level, setLevel]=useState('Beginner level');
    const [salary, setSalary]=useState(0);

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(()=>{
      if(!quillRef.current && editorRef.current){
        quillRef.current = new Quill(editorRef.current,{
           theme:'snow',
        })
      }   
    },[])

  return (
    <form className='container flex flex-col items-start w-full gap-3 p-4'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input type='text' placeholder='Type here' onChange={e=> setTitle(e.target.value)} value={title} required 
        className='w-full max-w-lg px-3 py-2 border-2 border-gray-200 rounded'/>
      </div>

      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Decription</p>
        <div ref={editorRef}>

        </div>
      </div>
      
      <div className='flex flex-col w-full gap-2 sm:flex-row sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select className='w-full px-3 py-4 border-2 border-gray-200 rounded' onChange={e=>setCategory(e.target.value)}>
            {JobCategories.map((category,index)=>(
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <select className='w-full px-3 py-4 border-2 border-gray-200 rounded' onChange={e=>setLocation(e.target.value)}>
            {JobLocations.map((location,index)=>(
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Level</p>
          <select className='w-full px-3 py-4 border-2 border-gray-200 rounded' onChange={e=>setCategory(e.target.value)}>
           <option value="Beginner level">Beginner level</option>
           <option value="Intermediate level">Intermediate level</option>
           <option value="Senior level">Senior level</option>
            
          </select>
        </div>
        <div className='mb-2'>
          <p>Job Salary</p>
          <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e=> setSalary(e.target.value)} type='number' placeholder='25000'/>
        </div>
        <button className='py-3 mt-4 text-white bg-black rounded w-28'>ADD</button>
      </div>
    </form>
  )
}

export default AddJob