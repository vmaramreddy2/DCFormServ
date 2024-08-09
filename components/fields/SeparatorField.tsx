"use client";

import React, { useEffect, useState } from 'react';
import { ElementsType, FormElement, FormElementInstance, SubmitFunction } from '@/components/FormElements';
import {useForm} from "react-hook-form"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import useDesigner from '../hooks/useDesigner';

import {Form, 
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { RiSeparator } from 'react-icons/ri';
import { Separator } from '../ui/separator';

const type : ElementsType = "SeperatorField"

export const SeparatorFieldFormElement: FormElement = {
    type, 
    construct: (id : string) => ({
        id,
        type,
    }),
    designerBtnElement: {
        icon: RiSeparator,
        label: "Seperator Field",
    },
    designerComponent: DesignerComponent,
    formComponent: FormComponent,
    propertiesComponent: PropertiesComponent,

    validate: () => true,
};

function PropertiesComponent({elementInstance}:{elementInstance: FormElementInstance}){
    return (
        <p>No Proprties for this element</p>
    )
}


function FormComponent({ elementInstance}:{elementInstance: FormElementInstance;}) {
    return (
        <Separator/>
    );
}



function DesignerComponent({elementInstance}:{elementInstance:FormElementInstance}){
    return ( <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">Seperator Field</Label>
        <Separator/>
        </div>
    );
}