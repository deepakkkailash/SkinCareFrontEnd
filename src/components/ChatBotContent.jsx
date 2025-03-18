import {useState,useEffect,useRef} from 'react'
import BotReplySpace from './BotReplySpace'
import Robot from '../assets/Bot.png';
const Content = ()=>{
       const inpref = useRef(null)
       const firstrenderref = useRef(true)
       const [saidhi,setsaidhi]= useState(false)
       const [HaveYouAskedAReply,setHaveYouAskedAReply] = useState(-1)
       const [file,setfile] = useState(null) //state lifted up and passed as prop
       const [reply,setReply] = useState('')

       const changeQuestionStatus = ()=>{
                setHaveYouAskedAReply(HaveYouAskedAReply+1);
       }

        const changeFile = (event)=>{
            let file = event.target.files[0]
            setfile(file);
        }


       const changeHiStatus = ()=>{
            setsaidhi(true)
            changeQuestionStatus()

       }
       const fetchstuff = async ()=>{
                console.log('hi')
                if(file){

                    //Write logic to include file in the body of the request
                    console.log('There is a file available')
                }
                 let res = await fetch('https://fa37-34-106-45-136.ngrok-free.app/getresponse',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({question:inpref.current.value})
                })

                let data = await res.text()

                setReply(data)

                console.log(data)


       }
       useEffect( ()=>{
           if(firstrenderref.current){
                firstrenderref.current = false;
                return
           }

            fetchstuff();

       },[HaveYouAskedAReply])



            //Only Initially This shall Be rendered when no questions have been asked in the past.

         return saidhi==false?
         //initial case
            ( <div className='w-[100vw] h-[80vh] flex flex-col items-center justify-center'>
              <div className=' flex flex-col  lg:gap-[200px]  gap-[350px] md:gap-[100px] sm:gap-[100px] rounded-lg bg-white lg:p-[0px] p-[20px]  lg:w-[60vw] lg:h-[50vh]  rounded-lg bg-white w-[80vw] h-[80vh]' >

                    <div className='flex flex-row gap-[15px]'>
                            <input ref={inpref} placeholder='Ask a Question' className='lg:w-[90%] p-[10px] bg-red-500 rounded-lg text-white font-mono font-bold focus:outline-none'/>
                            <button className='p-[10px] rounded-lg bg-black text-white hover:opacity-[0.6]' onClick={changeHiStatus}>Go</button >
                    </div>
              </div>
            </div>
             ):
            //after user says hii
             (<div className='w-[100vw] h-[80vh] flex flex-col items-center justify-center'>
           <div className=' flex flex-col items-center  lg:gap-[150px] gap-[150px] sm:gap-[300px] md:gap-[100px] sm:gap-[100px] rounded-lg bg-white lg:p-[0px] p-[10px]   lg:w-[50vw] lg:h-[50vh]  rounded-lg bg-white w-[100vw] h-[80vh]' >
                <div className='lg:flex lg:flex-row lg:gap-[120px] flex flex-col gap-[20px] justify-start items-center'>
                        <img src={Robot} className='lg:w-[30%] w-[70%] drop-shadow-2xl rounded-lg'/>
                        {reply.includes('Image')?<BotReplySpace reply={reply} imageNeeded={true} changeFileStatus={changeFile} />:
                            <BotReplySpace reply={reply} imageNeeded={false} />
                        }

                </div>
                    <div className='flex flex-row gap-[15px] lg:w-[100%]'>
                            <input ref={inpref} placeholder='Ask a Question' className='lg:w-[90%] p-[10px] bg-red-500 rounded-lg text-white font-mono font-bold focus:outline-none'/>
                            <button className='p-[10px] rounded-lg bg-black text-white hover:opacity-[0.6]' onClick={changeQuestionStatus}>Go</button >
                        </div>
               </div>
            </div>);









}

export default Content;