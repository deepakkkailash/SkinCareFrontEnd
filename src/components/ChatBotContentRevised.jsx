import Robot from '../assets/Bot.png'
import BotReplySpace from './BotReplySpace'
import {useRef,useState,useEffect} from 'react'
const ChatbotContentRevised = ()=>{
    const inpref = useRef(null);
    const [answerspaceneeded, setanswerspaceneeded]= useState(false)
    const fileref = useRef(null);
    const langref = useRef('en')
    const [reply,setreply] = useState('')
    const [Loc,SetLoc] = useState(null)

    const enableTrans = ()=>{
            langref.current = 'unknown'
    }
    const changeanswerspacestatus = ()=>{
            setanswerspaceneeded(true)
    }
    const changeReply = (reply)=>{
        setreply(reply)
    }
    const changeFile= (event)=>{
        fileref.current = event.target.files[0];
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos);SetLoc(pos)})
    },[])
    const SubForResp = async ()=>{
           let question = inpref.current.value;
           let formdata = new FormData();
            if(answerspaceneeded==false){
                //Indicates First Convo
                if(langref.current=='unknown'){
                    formdata.append('TranslateReq',true)
                }
                changeanswerspacestatus()
                formdata.append('question',question);
                formdata.append('loc',JSON.stringify([Loc.coords.latitude, Loc.coords.longitude]))

            }
            else{
                if(reply.includes('image') && fileref.current){
                    formdata.append('image',fileref.current);
                    formdata.append('question',question)
                }
                else{
                         formdata.append('question',question)
                }

            }
            let res = await fetch('https://7ee3-35-227-53-250.ngrok-free.app/getresponse',{
                method:'POST',
                body:formdata
            })

            let data = await res.json();

            changeReply(data.reply)

}

    if(!answerspaceneeded){
         return(
        <div className='w-[100vw] h-[80vh] flex flex-col items-center justify-center'>
              <div className=' flex flex-col  lg:gap-[200px]  gap-[350px] md:gap-[100px] sm:gap-[100px] rounded-lg bg-white lg:p-[0px] p-[20px]  lg:w-[60vw] lg:h-[50vh]  rounded-lg bg-white w-[80vw] h-[80vh]' >
                       <div className='flex flex-row gap-[10px] items-center'>
                        <img src={Robot} className='lg:ml-[350px] lg:w-[20%] drop-shadow-2xl rounded-lg'/>
                         <button onClick={enableTrans}className='bg-red-500 p-[10px] w-[30%] h-[30%] rounded-lg font-mono font-bold text-white'> Enable Translation </button>
                   </div>
                        <div className='flex flex-row gap-[15px]'>
                            <input ref={inpref} placeholder='Ask a Question' className='lg:w-[90%] p-[10px] bg-red-500 rounded-lg text-white font-mono font-bold focus:outline-none'/>
                            <button className='p-[10px] rounded-lg bg-black text-white hover:opacity-[0.6]' onClick={SubForResp}>Go</button >
                        </div>
              </div>
            </div>

    )
    }
    else{
        return(<div className='w-[100vw] h-[80vh] flex flex-col items-center justify-center'>
           <div className=' flex flex-col items-center  lg:gap-[150px] gap-[150px] sm:gap-[300px] md:gap-[100px] sm:gap-[100px] rounded-lg bg-white lg:p-[0px] p-[10px]   lg:w-[50vw] lg:h-[50vh]  rounded-lg bg-white w-[100vw] h-[80vh]' >
                <div className='lg:flex lg:flex-row lg:gap-[120px] flex flex-col gap-[20px] justify-start items-center'>
                        <img src={Robot} className='lg:w-[30%] w-[70%] drop-shadow-2xl rounded-lg'/>
                        {reply.includes('image')?<BotReplySpace reply={reply} imageNeeded={true} changeFileStatus={changeFile} />:
                            <BotReplySpace reply={reply} imageNeeded={false} />
                        }

                </div>
                    <div className='flex flex-row gap-[15px] lg:w-[100%]'>
                            <input ref={inpref} placeholder='Ask a Question' className='lg:w-[90%] p-[10px] bg-red-500 rounded-lg text-white font-mono font-bold focus:outline-none'/>
                            <button className='p-[10px] rounded-lg bg-black text-white hover:opacity-[0.6]' onClick={SubForResp}>Go</button >
                        </div>
               </div>
            </div>)

    }


}

export default ChatbotContentRevised;