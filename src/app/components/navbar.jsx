"use client"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { use, useState } from "react"
import { motion } from "motion/react"
import { X } from "lucide-react"
import { Instagram } from "lucide-react"
import { XIcon } from "lucide-react"
import { MoveRight } from "lucide-react"
export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
    const [menu,setMenu]= useState("Menu"); 
    const NavLinks = [
        {title:"Home",Link: "#"},
        {title:"About",Link: "#about"},
        {title:"Gallery",Link: "#gallery"},
        {title:"Team",Link: "#team"},
        {title:"Analytics",Link: "#analytics"},
        {title:"Contact",Link: "#contact"},
    ]

    return(
        <>
        <div className="flex flex-row w-screen p-3 sm:p-5 justify-between fixed z-10">
            <h1 className="text-sm sm:text-base md:text-lg">Neutron</h1>
            <Button className="bg-black outline-none cursor-pointer rounded-4xl w-auto sm:w-[15%] md:w-[10%] lg:w-[6%] text-xs sm:text-sm md:text-md px-2 sm:px-4" onClick={() => {setIsOpen(!isOpen)
            setMenu(isOpen?"Menu":"Close")

            }}>{menu}{!isOpen?(<Menu className="ml-1 w-4 h-4 sm:w-5 sm:h-5" />):(
                <X className="ml-1 w-4 h-4 sm:w-5 sm:h-5" />
            )}</Button>
           
        </div> 
        {isOpen?(
             
                
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 absolute w-screen h-screen top-0 bg-black opacity-75 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.50 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >
                    <div className="flex flex-col p-5 sm:p-10 md:p-15 lg:p-20 justify-center gap-5 md:gap-10 lg:col-span-2">
                        {NavLinks.map((links, index)=>{
                        return(
                            <motion.a 
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.3, 
                                ease: "easeIn",
                                delay: index * 0.1
                            }}
                            whileHover={{ 
                                translateX: 10,
                                transition: { duration: 0.1, ease: "easeOut" }
                            }}
                            href={links.Link} className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-fit font-bold"
                             onClick={() => {setIsOpen(!isOpen)
                                setMenu(isOpen?"Menu":"Close")

                                }}
                            ><span className="m-1 sm:m-2 md:m-3 text-xs sm:text-sm text-gray-400">0{index+1}</span>{links.title}</motion.a>
                        )
                        })}

                    </div>

                    <div className="text-3xl sm:text-4xl md:text-5xl my-auto p-5 text-white flex flex-col md:gap-5 border-t-[0.5px] lg:border-l-[0.5px] lg:border-t-0 font-bold  lg:h-[80%] lg:justify-between pb-10 lg:pb-0"
                    style={
                        {borderColor:"gray"}
                    }
                    >
                        <div className="flex flex-col gap-5">

                        
                        <p className="text-gray-400 text-base sm:text-lg md:text-[20px]">Connect</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-fit">
                            <Button variant="ghost" className="my-2 w-fit border-[0.5px] cursor-pointer rounded-2xl text-xs sm:text-sm md:text-base"
                            style={{
                                borderColor:"gray"
                            }}
                            ><XIcon className="w-4 h-4 sm:w-5 sm:h-5"/>X</Button>
                            <Button variant="ghost" className="my-2 w-fit border-[0.5px] cursor-pointer rounded-2xl text-xs sm:text-sm md:text-base"
                            
                            style={{
                                borderColor:"gray"
                            }}
                            > <Instagram className="w-4 h-4 sm:w-5 sm:h-5"/>Instagram</Button>
                        </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-gray-400 text-base sm:text-lg md:text-[20px] mt-30">Get in Touch</p>
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] break-all">Neutron@gmail.com</h1>

                        </div>
                    
                        <Button className=" text-black hover:bg-white bg-gray-300 font-bold w-fit rounded-2xl cursor-pointer text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2">Contact Us <MoveRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5"/></Button>
                    
                    </div>

                   

                   
 
                    
                    
                    
                </motion.div>
          
                
        
        ):null}
        
        </>

    )

}