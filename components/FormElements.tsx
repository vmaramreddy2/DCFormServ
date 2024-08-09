import React from "react";
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";
import { SubTitleFieldFormElement } from "./fields/SubTitleField";
import { ParagraphFieldFormElement } from "./fields/ParagraphField";
import { SeparatorFieldFormElement } from "./fields/SeparatorField";
import { SpacerFieldFormElement } from "./fields/SpacerField";
import { NumberFieldFormElement } from "./fields/NumberField";
import { TextAreaFieldFormElement } from "./fields/TextAreaField";
import { DateFieldFormElement } from "./fields/DateField";
import { SelectFieldFormElement } from "./fields/SelectField";
import { CheckBoxFieldFormElement } from "./fields/CheckBoxField";
export type ElementsType = "TextField" |
    "TitleField" |
    "SubTitleField" |
    "ParagraphField" |
    "SeperatorField" |
    "SpacerField" |
    "NumberField" |
    "TextAreaField" |
    "DateField" |
    "SelectField" | 
    "CheckBoxField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
    type: ElementsType;

    construct: (id: string) => FormElementInstance;

    designerBtnElement: {
        icon: React.ElementType;
        label: string;
    }

    designerComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;
    formComponent: React.FC<{
        elementInstance: FormElementInstance;
        submitValue?: SubmitFunction;
        isInvalid?: boolean;
        defaultValue?: string;
    }>;
    propertiesComponent : React.FC<{
        elementInstance: FormElementInstance;
    }>;

    validate: (formElement: FormElementInstance, currentValue:string) => boolean;
}

export type FormElementInstance = {
    id: string;
    type: ElementsType; 
    extraAttributes?: Record<string,any>;
}

type formElementsType = {
    [key in ElementsType] : FormElement
}

export const FormElements: formElementsType = {
    TextField: TextFieldFormElement,
    TitleField: TitleFieldFormElement,
    SubTitleField: SubTitleFieldFormElement,
    ParagraphField: ParagraphFieldFormElement,
    SeperatorField: SeparatorFieldFormElement,
    SpacerField: SpacerFieldFormElement,
    NumberField: NumberFieldFormElement,
    TextAreaField: TextAreaFieldFormElement,
    DateField: DateFieldFormElement,
    SelectField: SelectFieldFormElement,
    CheckBoxField: CheckBoxFieldFormElement
};