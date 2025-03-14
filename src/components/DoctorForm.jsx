import {useState,useRef} from 'react'
import FormComponent from './FormComponent'
import FetchLoc from './FetchLoc'
const DoctorForm = (props)=>{
      const [submitted, setSubmitted] = useState(false)
      const formref = useRef(null)

      const [Loc,SetLoc]  = useState({coords:{latitude:null,longitude:null}})
      const changeLoc =  ()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos);SetLoc(pos)})
    }
        const formupload =async ()=>{

            let formdata = new FormData(formref.current)
            formdata = Object.fromEntries(formdata.entries())
            formdata = {...formdata,loc:[Loc.coords.latitude,Loc.coords.longitude]}
            console.log(formdata)
            let res = await fetch('',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formdata)
            });

        }
        return(
        <form ref={formref} className='w-[50vw] h-[80vh] bg-white rounded-lg p-[30px] flex flex-col gap-[20px] justify-center '>
            <h1 className='text-5xl font-mono font-bold text-yellow-700'>Welcome Doc....</h1>
            <FormComponent type='text' what='Name'  name='name'/>
            <FormComponent   type='text' what='NMR Registration Number' name='uniqueID'/>
            <FormComponent  type='number' what='Years Practioned' name='years'/>
            <FetchLoc Loc={Loc} change={changeLoc}/>
            <button  type='button' onClick={formupload} className='p-[30px] rounded-lg bg-green-500 text-white font-bold font-mono hover:opacity-[0.8]'>Register </button>
            <button type='button' className='bg-red-500 text-white font-bold font-mono w-[60px] h-[60px] rounded-lg p-[10px] hover:opacity-[0.5]' onClick={props.goback}> Go Back </button>
        </form>
        )
}

export default DoctorForm;