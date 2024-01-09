import React from "react"
import { BsGithub,BsLinkedin } from "react-icons/bs";
export default function Header(){
    return (
    <div className="Container mx-auto max-w-[800px] px-3 relative lg:absolute left-0 right-0">
        <div className="flex justify-between py-5 items-center">
            <div className="text-gradient font-secondary">
                <a href="/">
                    <h1 className="text-[30px] leanding-none font-bold">ARIEL</h1>
                    <h4 className="font-normal leanding-none">KUSUMA</h4>

                </a>
            </div>
            <div className="flex items-center space-x-3">
                <a href="/">
                    <BsGithub />
                </a>
                <a href="/">
                    <BsLinkedin />
                </a>

            </div>

            </div> 
    </div>
    )
}


