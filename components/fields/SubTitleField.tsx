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
import { Switch } from '../ui/switch';
import { cn } from '@/lib/utils';
import { LuHeading1, LuHeading2 } from 'react-icons/lu';

const type : ElementsType = "SubTitleField"

const extraAttributes = {
    title : "SubTitleField",
}

const propertiesSchema = z.object({
    title: z.string().min(2).max(50),
})

export const SubTitleFieldFormElement: FormElement = {
    type, 
    construct: (id : string) => ({
        id,
        type,
        extraAttributes
    }),
    designerBtnElement: {
        icon: LuHeading2,
        label: "SubTitle Field",
    },
    designerComponent: DesignerComponent,
    formComponent: FormComponent,
    propertiesComponent: PropertiesComponent,

    validate: () => true,
};

type CustomInstance = FormElementInstance & {
    extraAttributes : typeof extraAttributes;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({elementInstance}:{elementInstance: FormElementInstance}){
    const element = elementInstance as CustomInstance;
    const {updateElement} = useDesigner();
    const form = useForm<propertiesFormSchemaType>({
        resolver: zodResolver(propertiesSchema),
        mode: "onBlur",
        defaultValues: {
            title: element.extraAttributes.title,
        }
    });

    useEffect(()=>{
        form.reset(element.extraAttributes);
    },[element, form]);

    function applyChanges(values: propertiesFormSchemaType){
        const {title } = values;
        updateElement(element.id, {
            ...element,
            extraAttributes: {
               title,
            }
        });
    }

    return <Form {...form}>
        <form onBlur={form.handleSubmit(applyChanges)} onSubmit={(e)=>{
            e.preventDefault();
        }} className="space-y-3">
            <FormField control={form.control} name="title" render={({field})=>(
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input {...field} onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                e.currentTarget.blur();
                            }
                        }}/>
                    </FormControl>
                    <FormDescription>
                        
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
        </form>
    </Form>
}


function FormComponent({ elementInstance}:{elementInstance: FormElementInstance;}) {
    const element = elementInstance as CustomInstance;
    const {title} = element.extraAttributes;
    return (
        <p className="text-xl">{ title}</p>
    );
}



function DesignerComponent({elementInstance}:{elementInstance:FormElementInstance}){
    const element = elementInstance as CustomInstance;
    const {title} = element.extraAttributes;
    return ( <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">SubTitle Field</Label>
        <p className="text-lg">{title}</p>
        </div>
    );
}