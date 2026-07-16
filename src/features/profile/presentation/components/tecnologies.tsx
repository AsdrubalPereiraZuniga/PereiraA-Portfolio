'use client';
import { Chip } from "@heroui/react";
import { TechChipProps } from "../../domain/TypeProfile";

export default function TechChip({name, icon}: TechChipProps){
    
    return(
        <div className="flex items-center">
            <Chip 
                className="w-auto h-10 flex items-center justify-center px-2 gap-2 rounded-sm text-white bg-[#5A9DC7]">
                <div className="flex items-center justify-center gap-2 w-full">
                <img
                    src={`${icon}`}                    
                    alt="React"
                    className="w-5 h-5"
                />
                <span>{name}</span>
            </div>    
            </Chip>
        </div>
    );
}