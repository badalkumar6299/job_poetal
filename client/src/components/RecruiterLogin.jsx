import React, { useState } from 'react';
import { assets } from '../assets/assets';


const RecruiterLogin = () => {

    const [state,setState] = useState('Login')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const[image,setImage] = useState(false)

    const [isTextDataSubmited,setIsTextDataSubmited] = useState(false)

    const onSubmitHandler = async (e) =>{
        e.preventDefault()
        if(state == "Sign Up" && !isTextDataSubmited){
            setIsTextDataSubmited(true)
        }
    }

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black/30'>
        <form className='relative top-0 p-10 bg-white rounded-xl text-slate-500'>
            <h1 className='text-2xl font-medium text-center text-neutral-700'>Recruiter {state}</h1>
            <p className='text-sm'>Welcom back! Please sign in to continue</p>
            {
                state ==='Sign Up' && isTextDataSubmited
                ?<>
                </>
                : <>
                {state !=='Login' && (
                    <div className='flex items-center gap-2 px-4 py-2 mt-5 border rounded-full'>
                    <img src={assets.person_icon} alt="" />
                    <input className='text-sm outline-none' onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Company Name" required/>
                </div>
                )}
                
                <div className='flex items-center gap-2 px-4 py-2 mt-5 border rounded-full'>
                    <img src={assets.email_icon} alt="" />
                    <input className='text-sm outline-none' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email Id" required/>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 mt-5 border rounded-full'>
                    <img src={assets.lock_icon} alt="" />
                    <input className='text-sm outline-none' onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required/>
                </div>
                </>
            }
           <p className='my-4 text-sm text-blue-600 cursor-pointer'>Forgot password?</p>

            <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-full'>
                {state ==='Login' ? 'Login' : 'create account'}
            </button>
            {
                state==='Login' ?
                <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600' onClick={()=>setState("Sign Up")}>Sign Up</span></p>:
                <p className='mt-5 text-center'>Already have an account?<span className='text-blue-600' onClick={()=>setState("Login")}>Login</span></p>
            }
            
        </form>
    </div>
  )
}

export default RecruiterLogin