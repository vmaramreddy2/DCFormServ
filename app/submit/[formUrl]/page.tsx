import { GetFormContentByUrl } from '@/actions/form';
import { FormElementInstance } from '@/components/FormElements';
import FormSubmitContent from '@/components/FormSubmitContent';
import React from 'react'

async function SubmitPage({params}:{params:{formUrl : string}}) {

  const form = await GetFormContentByUrl(params.formUrl);
  if(!form){
    throw new Error("form not found");
  }
  const formContent = JSON.parse(form.content) as FormElementInstance[];
  return <FormSubmitContent formUrl={params.formUrl} content={formContent}/>
}

export default SubmitPage
