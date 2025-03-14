const DoctorOption = (props)=>{
        return(
                  <div onClick={props.onClick} className={`w-[50%] h-[100%] text-black flex flex-col items-center justify-center ${props.bgcolor}  font-bold font-mono`}>
                                    {props.textContent}
                         </div>

    )

}

export default DoctorOption;