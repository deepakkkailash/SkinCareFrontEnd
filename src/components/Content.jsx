import ChatBotContent from './ChatBotContent'
import SelectionButton from './SelectionButton'
import DoctorContent from './DoctorContent'
import {useState} from 'react'
const Content = ()=>{
    const [selected,setSelected] = useState(null);

    const changeToDoctor = ()=>{
        setSelected('doctor')
    }

    const changeToPatient = ()=>{
        setSelected('Patient')
    }
    if(selected){
        if(selected=='Patient'){
            return(<ChatBotContent />)
        }
        else if(selected=='doctor'){
            return (<DoctorContent />);
        }

    }

    else{

        return(
                <div className='flex flex-col items-center justify-center w-[100vw] h-[80vh]'>

                            <div className='flex flex-row items-center gap-[10px]'>
                                    <SelectionButton onClick={changeToPatient} textContent='I am a patient'/>
                                    <SelectionButton onClick={changeToDoctor} textContent='I am a doctor'/>
                           </div>
                </div>
        )
}

}

export default Content;