import React from "react";
import Link from 'next/link';
import Paginacion from "../componentes/paginacion";
export default async function Collage(props) {
const {filtro ,pag} = props;
const filt = filtro.split(",");
const data = await fetch('https://fakestoreapi.com/products/')
.then(res => res.json());
const prices =  [];
const category=[];
filt.forEach((e,i) => {
  if(i%2==0){
    if(e=="price"){
      prices.push(filt[i+1])
    }
    if(e=="category"){
      category.push(filt[i+1])
    }              
  }    
});
const tamanioPag = 12;
const dates = data.filter((f)=>(prices.length == 0 ? true:prices.some((e)=> e==f.price)) && (category.length == 0 ? true:category.some((e)=> e==f.category)))
const dateNum = dates.filter((f,i)=>((tamanioPag * (pag-1)+1) <= (i+1) && (i+1) <= (tamanioPag*pag)))
const filtros = data.filter((f)=>((tamanioPag * (pag-1)+1) <= f.id && f.id <= (tamanioPag*pag)))
const result= filtro ? dateNum : filtros
const numItems =   filtro ? Object.keys(dates).length : Object.keys(data).length;


return(
<div >
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-1 px-4">                   
  {result.map((result,index)=>{            
      const fuente= result.image   
      const  name = result.title;
      const  id = result.id;
      const  categoria = result.category;
      return(                   
              <div key={index} className="grid gap-8 bg-red">
                <div>
                  <figure  className="sm:max-w-lg max-w-xs">
            
                    <Link   href={`/dashboard/[id]`} as={`/dashboard/${id}`}>
                      <img  className="h-auto max-w-full rounded-lg" src={fuente}>
                      </img>  
                      <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{categoria}</figcaption>
                    </Link>                     
                  </figure>         
                </div>
              </div>         
              )})}
  </div> 
  <div className="flex justify-center md:mt-15 mt-10">
    <Paginacion paginaActual = {pag} conteoItems={numItems} tamanoPagina={tamanioPag}>                    
    </Paginacion>
  </div>  
</div>
)    
}