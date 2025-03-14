const FormComponent = (props)=>{
    return(
        <div className='flex flex-row gap-[10px] font-bold font-mono  gap-[10px] items-center'>
            <label htmlFor={props.name} className='text-violet-500'>{props.what}: </label>
            <input type={props.type} min={0} name={props.name} className={props.type=='number'?'w-[50px] p-[5px] bg-red-500 text-white rounded-lg':'rounded-lg p-[10px] bg-black text-white'} />
        </div>
     )
}

export default FormComponent;