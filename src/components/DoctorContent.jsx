import DoctorOption from './DoctorOption'
import DoctorForm from './DoctorForm'
import DoctorAbout from './DoctorAbout'
import {useState} from 'react'
const DoctorContent = ()=>{
        const [What,setWhat] = useState(null);

        const changeRegister = ()=>{
            setWhat('Register')
        }

        const changeAbout = ()=>{
                setWhat('Why Should I')
        }

        const goback = ()=>{
            setWhat(null);
        }
        if(What){
            if(What=='Register'){
                return (<DoctorForm  goback={goback}/>)
            }
            else if(What=='Why Should I'){
                return (<DoctorAbout  goback={goback} />)
            }
        }
        else{
        return(
            <div className='flex flex-col items-center justify-center w-[100vw] h-[80vh]'>
                    <div  className='w-[50vw] h-[50vh] flex flex-row bg-white rounded-lg'>
                            <DoctorOption  onClick={changeRegister} textContent='Register' bgcolor='bg-red-500'/>
                            <DoctorOption onClick={changeAbout} textContent='Why Should I' bgcolor='white'/>
                    {
                    /*
                         <div onClick={} className='w-[50%] h-[100%] text-black flex flex-col items-center justify-center bg-red-500 font-bold font-mono '>
                                    Register
                         </div>
                          <div onClick={} className='w-[50%] h-[100%] text-black flex flex-col items-center justify-center font-bold font-mono '>
                                    Why Should I ?
                         </div>
                         */
                           }
                    </div>

            </div>

        )
        }
}

export default DoctorContent;