import React from 'react';
import img from '../assets/github.png';




export default function Contributors(){
    return(
        <div className=''>
            <h1 className='md:font-extrabold text-[2em] lg:text-[5em]/[166.7px] md:text-[4em]/[100px] text-center'>Contribute to this project</h1>
            <div className='grid grid-rows-[5rem_minmax(auto,max-content)_50px_auto] grid-cols-[1rem_auto_1rem] sm:grid-cols-[3rem_auto_3rem] md:grid-rows-[3rem_minmax(auto,max-content)_50px_auto] md:grid-cols-none place-content-center place-items-center'>
                <img src='https://contrib.rocks/image?repo=yagyesh-bobde/GenAI-Projects' className='row-start-2'/>
                <a href='#' className='w-fit p-1 items-center rounded-full outline outline-offset-2 outline-2 text-white hover:text-white inline-grid grid-cols-[auto_1fr] justify-center gap-2 row-start-4 font-bold text-[9px]'><img src={img} className='w-[15px]'/>Submit your project</a>
            </div>
        </div>
    
    )   
}