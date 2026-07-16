import { Button, Divider } from "@heroui/react";
import Image from 'next/image';

export default function Profile(){

    return(
        <div className="w-full flex flex-col items-center gap-4 justify-center border-2 border-solid rounded-2xl border-[#5A9DC7]">            
            <span className="w-auto text-3xl font-bold mt-5 text-[#C66A10]">
                Perfil
            </span>
            <Divider 
                orientation="horizontal"
                className="w-full md:w-[60%] h-1 rounded-md bg-[#5A9DC7]">
            </Divider>  

            <Image 
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                width={450}
                height={450}
                alt="Profile"
            >
            </Image>   
            
            <a 
                href="mailto:asdrubalperezu75a.z@gmail.com"
                className="text-white hover:underline cursor-pointer hover:text-[#5A9DC7]">
                asdrubalperezu75a.z@gmail.com
            </a>  
            <p className="text-white">
                San Isidro del General, San José, Costa Rica
            </p>  
            <div className="flex items-start justify-between gap-2">
                <Button 
                    className="w-auto h-8 flex items-center justify-center text-white bg-[#5A9DC7] hover:bg-[#165987] rounded-sm"
                    startContent={
                        <img
                        src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}                    
                        alt="React"
                        className="w-7 h-7"
                    />}
                    as="a"
                    href="https://github.com/AsdrubalPereiraZuniga"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                </Button>
                <Button 
                    className="w-auto h-8 flex items-center justify-center text-white bg-[#5A9DC7] hover:bg-[#165987] rounded-sm"
                    startContent={
                        <img
                        src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"}                    
                        alt="React"
                        className="w-7 h-7"
                    />}
                    as="a"
                    href="https://www.linkedin.com/in/asdrubal-pereira-zuniga"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Linkedin
                </Button>
            </div>  
            <Button className="text-white flex gap-2 bg-[#C66A10] hover:bg-[#5A9DC7] mb-1 rounded-sm"
                startContent={<i className="bi bi-file-earmark-arrow-down text-xl"></i>}>
                Descargar CV
            </Button>             
        </div>
    );
}