"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Tabs, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeSwitcher(){
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState(false);
    
    useEffect(()=> {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return <Tabs defaultValue="theme">
        <TabsList className="border">
            <TabsTrigger value="light" onClick={()=> setTheme("light")}>
                <SunIcon className="h-[1.2rem] w-[1.2rem]"></SunIcon>
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={()=> setTheme("dark")}>
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0"></MoonIcon>
            </TabsTrigger>
            <TabsTrigger value="system" onClick={()=> setTheme("system")}>
                <DesktopIcon className="h-[1.2rem] w-[1.2rem] "></DesktopIcon>
            </TabsTrigger>
        </TabsList>
    </Tabs>

}

export default ThemeSwitcher;

