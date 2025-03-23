import {useState,useEffect} from 'react'

const BotReplySpace = (props)=>{
    if(props.reply!='doctor'){
                if(props.imageNeeded){
                console.log('hi');
                return (<>

                <div className='bg-black flex flex-col items-center rounded-lg p-[30px] w-fit h-fit'>
                    <span className='font-mono font-bold text-white '>{props.reply}</span>
                    <label>
                        <a className='text-sky-500 font-mono font-bold'>Image Upload Here</a>

                        <input type='file' id='myfile' name='imagefile' hidden onChange={props.changeFileStatus} />
                   </label>
                </div></>)
            }
            else{
               return(
                <div className='font-mono font-bold text-white bg-black rounded-lg w-[400px] p-[20px] h-[200px] overflow-scroll'>
                    {props.reply}
                </div>);

            }
   }
   else{
        if(props.doctor=={}){
              return(

                <div className='font-mono font-bold text-white bg-black rounded-lg w-[400px] p-[20px] h-fit'>
                    No doctors Nearby
                </div>);
        }
        else{
             return(

                <div className='font-mono font-bold text-white bg-sky-500 rounded-lg w-[400px] p-[20px] h-fit flex flex-col items-center'>
                    <h1 className='text-lg'>Your Nearest Doctor is : {props.doctor['name']} with {props.doctor['years']} years of experience </h1>
                    <p className='text-red-500'>Their address is : {props.doctor['address']}</p>
                    <p className='text-sm'>Pls Contact them using their phone number {props.doctor['PhoneNumber']} for more info</p>

                </div>);
        }



   }



}



export default BotReplySpace