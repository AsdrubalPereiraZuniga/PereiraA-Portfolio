'use client';
import { Link, Button, Divider } from "@heroui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function NavBar(){
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
        if (!isMenuOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
    }

    const links = [
        {href: '/', label: 'Inicio'},
        {href: '/profile', label: 'Perfil'},
        {href: '/portfolio', label: 'Portafolio'},
        {href: '/experience', label: 'Experiencia'},
        {href: '/contact', label: 'Contacto'},        
    ];

    return(
        <header className="flex items-center justify-end p-4 gap-6 bg-[#031825]">        
            <nav className="hidden md:flex gap-4 items-center text-lg">
                {links.map((item) => {
                    const isActive = pathname === item.href;
                    return(                        
                        <Link 
                            key={item.href}
                            href={item.href}
                            className={`font-bold transition-colors duration-300 ${isActive ? 'text-[#C66A10]': 'text-white'} hover:text-[#5A9DC7]`}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>    
            <Button                      
                className="font-bold w-30 h-8 bg-[#C66A10] text-white rounded-sm hover:bg-[#5A9DC7]"                                
                endContent={<i className="bi bi-box-arrow-in-right ml-1" />}
                >
                Ingresar
            </Button>
            
            <div className="md:hidden flex items-center">
                <Button onPress={toggleMenu}
                    className="text-white focus:outline-none"
                >
                    <i className="bi bi-list text-3xl"></i>
                </Button>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 h-screen bg-[#031825] z-50 p-4 overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <Button isIconOnly className="text-white focus:outline-none" onPress={toggleMenu}>
                            <i className="bi bi-x-square text-2xl"></i>
                        </Button>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-8">
                        {links.map((item) => {
                            const isActive = pathname === item.href;
                            return(
                                <Link 
                                    key={item.href}
                                    href={item.href}                                    
                                    className={`font-merriweather ${isActive ? 'text-[#C66A10]': 'text-white'} hover:text-[#5A9DC7]`}
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}