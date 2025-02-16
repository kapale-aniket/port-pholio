import { useState } from "react";
const Header=()=>{
    const[brandName,setBrandName]=useState("Aniket Arun Kapale");
     const[menuLinks,setMenuLinks]=useState([
        {
         title:"Home",
         link:"/Home",
         id:1,
         },
         {
            title:"About",
            link:"/About",
            id:2,
         },  
         {
            title:"Skills",
            link:"/Skills",
            id:3,
         },
         {
            title:"Portfolio",
            link:"/Portfolio",
            id:4,
         },
        {
            title:"Contact",
            link:"/Contact",
            id:4,
        },    
]);
const[actionButton,setActionButton]=useState({
    title:"Download App",
    link:"hire-me",
})
    return(
<>
<div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">

<div className="text-3xl" font-bold> {brandName} </div>
<div className="space-x-6">  
        {menuLinks.map((link)=>(
            <a key={link.id} href= {link.link} className="hover:text-orange-600">{link.title}</a>

       )) }
    {/* <a href="/About"className="hover:text-orange-600">About</a>

    <a href="/Skills"className="hover:text-orange-600">Skills</a>

    <a href="/Portfolio"className="hover:text-orange-600">Portfolio</a>

    <a href="/Contact"className="hover:text-orange-600">Contact</a> */}

</div>

<div> <a href="actionButton.link"
className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl">{actionButton.title}</a>  </div>

</div>
</>   
 )
}
export default Header;