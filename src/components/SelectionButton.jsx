const SelectionButton = (props)=>{
     return(<button onClick={props.onClick} className='rounded-lg p-[40px] bg-white text-black font-bold font-mono  hover:opacity-[0.5]'>
            {props.textContent}
       </button>)
}

export default SelectionButton;