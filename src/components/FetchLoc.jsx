import {useState} from 'react';


const FetchLoc = (props)=>{

    return (
    <div className='flex flex-row gap-[10px] items-center'>
        <div onClick={props.change} className='rounded-lg bg-purple-500 p-[30px] font-bold text-white font-mono hover:opacity-[0.8]'>
            Fetch Your Location
        </div>
        <div className='font-mono font-bold text-black'>{props.Loc.coords.latitude}</div>
        <div className='font-mono font-bold text-black'>{props.Loc.coords.longitude}</div>
    </div>
    )

}

export default FetchLoc;