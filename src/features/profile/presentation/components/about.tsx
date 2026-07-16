'use client';
import { Divider } from "@heroui/react";
import TechChip from "./tecnologies";
import { TechChipProps } from "../../domain/TypeProfile";
import Marquee from 'react-fast-marquee';
import Profile from "./profile";

export default function About(){
    const deviconsURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    const tecnologies: TechChipProps[] = [
        {name: "React", icon: "react/react-original.svg"},
        {name: "Next.js", icon: 'nextjs/nextjs-original.svg'},
        {name: "Flutter", icon: "flutter/flutter-original.svg"},
        {name: "Node.js", icon: "nodejs/nodejs-original.svg"},
        {name: ".NET", icon: "dot-net/dot-net-plain.svg"},
        {name: "Dart", icon: "dart/dart-original.svg"},
        {name: "TypeScript", icon: "typescript/typescript-original.svg"},
        {name: "MySQL", icon: "mysql/mysql-original.svg"},
        {name: "GitHub", icon: "github/github-original.svg"},
        {name: "Vercel", icon: "vercel/vercel-original.svg"},
        {name: "SQL Server", icon: "microsoftsqlserver/microsoftsqlserver-plain.svg"},
        {name: "Oracle", icon: "oracle/oracle-original.svg"},
    ];

    return(
        <section className="min-h-screen py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-4 gap-10 lg:px-10">
                <div className="w-full md:w-[60%] md:flex-3 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        ¡Hola! Soy{" "}
                        <span className="text-[#C66A10]">
                            Asdrúbal Pereira
                            <span className="text-white">,</span>
                        </span>
                    </h1>                 
                    <p className="text-3xl text-white mt-16">
                        Ingeniero en Sistemas | Desarrollador Full Stack
                    </p>

                    <Divider
                        orientation="horizontal"
                        className="w-full md:w-[96%] h-2 rounded-md bg-[#5A9DC7] mt-10"
                    >
                    </Divider>

                    <div className="text-2lx md:text-[27px] inline-block leading-normal mt-15">
                        <span className="text-white font-medium ">
                         Profesional en Ingeniería en Sistemas de Información, enfocado en el desarrollo Full Stack.
                         Transformo ideas de negocio en aplicaciones escalables y soluciones digitales
                         que generan valor para personas y organizaciones.
                        </span>                        
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-10">
                        <Marquee speed={40}>                            
                            {tecnologies.map((item) => {
                                return (
                                    <>
                                    <div className="flex mr-2">
                                        <TechChip 
                                            key={item.name}
                                            name={item.name}
                                            icon={`${deviconsURL}/${item.icon}`}
                                        />
                                    </div>
                                    </>
                                );
                            })}       
                        </Marquee>                                     
                        <Marquee speed={40} direction="right">
                            {tecnologies.map((item) => {
                                return (
                                    <>
                                    <div className="flex mr-2">
                                        <TechChip 
                                            key={item.name}
                                            name={item.name}
                                            icon={`${deviconsURL}/${item.icon}`}
                                        />
                                    </div>
                                    </>
                                );
                            })}       
                        </Marquee>    
                    </div>                    
                </div> 
                <div className="w-full flex-2 flex">
                    <Profile/>
                </div>                 
            </div>            
        </section>
    );
    
};