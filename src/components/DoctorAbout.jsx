const DoctorAbout = (props)=>{
return(
<div className='font-mono font-bold text-black bg-white rounded-lg w-[50vw] h-[50vh] p-[10px] flex flex-col items-center justify-center'>
    Join our platform and connect with patients who genuinely need your expertise.
    By registering, you'll increase your visibility among skincare-conscious users seeking trusted professionals.
    Our chatbot will seamlessly recommend your services to users in your area, bringing you potential clients without extra effort.
    You can update your details anytime, ensuring patients always have accurate information.
    Plus, it's a great way to build trust and credibility in the digital space, making it easier for people to reach out to you when they need help.
    <button className='p-[10px] rounded-lg bg-red-500 text-white font-bold font-mono hover:opacity-[0.5]' onClick={props.goback}>Go Back</button>
</div>
)
}

export default DoctorAbout;