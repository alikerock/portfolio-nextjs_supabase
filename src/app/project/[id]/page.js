import React from 'react';
import { createClient } from '@/utils/supabase/client';
import ProjectDetail from '@/component/ProjectDetail';

const supabase = createClient();

async function getData(id){
  const {data,error} = await supabase
  .from("portfolio")
  .select()
  .eq('id', id)
  .single();
  if(error){
    console.log(error);
    return null;
  }
  return data;
}

export async function GenerateMetadata({params}){  
  const { id } = await params
  const data = await getData(id);

  return {
    title:`${data?.title || 'Project'}- Minimal Portfolio`,
    description:  "welcome to my portfolio"
  }
}

export default async function Project({params}){
  const { id } = await params
  const data = await getData(id);

  return(
    <ProjectDetail data={data}/>
  )
}