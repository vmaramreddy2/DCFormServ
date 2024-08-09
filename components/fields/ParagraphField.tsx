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
import { title } from 'process';
import { LuHeading1 } from 'react-icons/lu';
import { BsTextParagraph } from 'react-icons/bs';
import { Textarea } from '../ui/textarea';

const type : ElementsType = "ParagraphField"

const extraAttributes = {
    text: "Text Here ..."
}

const propertiesSchema = z.object({
    text: z.string().min(2).max(50),
})

export const ParagraphFieldFormElement: FormElement = {
    type, 
    construct: (id : string) => ({
        id,
        type,
        extraAttributes
    }),
    designerBtnElement: {
        icon: BsTextParagraph,
        label: "Paragraph Field",
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
            text: element.extraAttributes.text,
        }
    });

    useEffect(()=>{
        form.reset(element.extraAttributes);
    },[element, form]);

    function applyChanges(values: propertiesFormSchemaType){
        const {text } = values;
        updateElement(element.id, {
            ...element,
            extraAttributes: {
               text,
            }
        });
    }

    return <Form {...form}>
        <form onBlur={form.handleSubmit(applyChanges)} onSubmit={(e)=>{
            e.preventDefault();
        }} className="space-y-3">
            <FormField control={form.control} name="text" render={({field})=>(
                <FormItem>
                    <FormLabel>Text</FormLabel>
                    <FormControl>
                        <Textarea rows={5} {...field} onKeyDown={(e)=>{
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
    const {text} = element.extraAttributes;
    return (
        <p>{ text}</p>
    );
}



function DesignerComponent({elementInstance}:{elementInstance:FormElementInstance}){
    const element = elementInstance as CustomInstance;
    const {text} = element.extraAttributes;
    return ( <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">Paragraph Field</Label>
        <p >{text}</p>
        </div>
    );
}