import bannerImage from '../assets/red.jpg'
import bannerBackground from '../assets/banner.jpg'
const Banner=()=>{
    return(
    <div
    style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
    }}
     className="main-container flex items-center ">

        <div className="  w-full flex justify-center text-white">
            <div className="w-2/3"> 
            <h3 className='mt-2 text-xl'>Hii,I am</h3>
            <h2 className='mt-2 text-3xl font-bold'>Aniket Arun Kapale</h2>
            <h2 className='mt-2 text-xl '>I AM A FULL STACK WEB DEVLOPER</h2>
            <p className='mt-2 text-1/2xl'>
            Full Stack Developer with hands-on experience in Python, SQL, and front-end technologies. Proficient in writing clean, maintainable code, executing test cases, and ensuring product reliability. Driven by curiosity to learn new frameworks and tools while applying best practices in software development.
            </p><br />
            <div className='icons_conainer space-x-7 text-4xl flex'>
 

                <a
                 href="https://www.linkedin.com/in/aniket-kapale-9b0578281/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:bg-blue-700 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center items-center bg-blue-600"
                >
                 <i className="fa-brands fa-linkedin text-white text-2xl"></i>
                </a>


                <a
                 href="https://github.com/kapale-aniket"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:bg-orange-700 border cursor-pointer px-3 py-3 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800"
                >
                 <i className="fa-brands fa-github text-white text-2xl"></i>
                </a>

            </div >

            <br></br>
            <a className=' text-xl px-1 py-2 bg-orange-500 rounded-full' href="/Contact">Contact Me</a>
            </div>
        </div>



        <div className =" w-full flex justify-center"> 
            <img className="rounded-full shadow-lg w-fit h-80" src={bannerImage}/>
        </div>

    </div>
    );
    
};
export default Banner;