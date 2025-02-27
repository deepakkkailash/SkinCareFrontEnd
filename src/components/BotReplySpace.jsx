const BotReplySpace = (props)=>{
    console.log('rendering')
    if(props.imageNeeded){

        return (<><div className='bg-black'>{props.reply}</div></>)
    }
    else{
       return(
        <div className='font-mono font-bold text-white bg-black rounded-lg w-[400px] p-[20px] h-fit'>
            {props.reply}
        </div>);

    }


}



export default BotReplySpace