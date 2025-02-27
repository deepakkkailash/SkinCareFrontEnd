import {useState,useEffect} from 'react'

const BotReplySpace = (props)=>{
    if(props.imageNeeded){

        return (<>

        <div className='bg-black flex flex-col items-center rounded-lg p-[30px] w-[300px] h-[200px]'>
            <span className='font-mono font-bold text-white'>{props.reply.slice(0,Math.min(100,props.reply.length))}</span>
            <label>
                <a className='font-mono font-bold text-sky-500'>Image Upload Here</a>
                <input type='file' id='myfile' name='myfile' hidden onChange={props.changeFileStatus} />
            </label>
        </div></>)
    }
    else{
       return(
        <div className='font-mono font-bold text-white bg-black rounded-lg w-[400px] p-[20px] h-fit'>
            {props.reply}
        </div>);

    }


}



export default BotReplySpace