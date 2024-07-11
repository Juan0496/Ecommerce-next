import Search from "./collage2";
import React from "react";
import Link from 'next/link';
import Paginacion from "../componentes/paginacion";
export default async function Collage2({searchParams}) {
const filtro = searchParams?.search || "";
const pag = searchParams?.pag|| 1;
const data = await fetch('https://fakestoreapi.com/products/')
.then(res => res.json());
const filtroMin=filtro.toLowerCase()
const tamanioPag = 12;
const res = data.filter((elemento) => elemento.category.startsWith(filtroMin) || elemento.title.startsWith(filtroMin) );
const numItems =   Object.keys(res).length;
return(
<div className="h-max flex-col ">
  <div className="h-max">
    <Search>          
    </Search>    
  </div>    
  {filtro ? <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-24 px-8">                   
                {res.map((result,index)=>{            
                const fuente= result.image   
                const  name = result.title;
                const  id = result.id;
                const  categoria = result.category;
                return(                   
                        <div key={index} className="grid gap-8 bg-red">
                          <div>
                            <figure  className="sm:max-w-lg max-w-xs">
                              <img  className="h-auto max-w-full rounded-lg" src={fuente}>
                              </img>         
                              <Link   href={`/dashboard/[id]`} as={`/dashboard/${id}`}>
                              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{categoria}</figcaption>
                              </Link> 
                            </figure>         
                          </div>
                        </div>         
                )})}
              </div> 
              <div>
                <Paginacion paginaActual = {pag} conteoItems={numItems} tamanoPagina={tamanioPag}>                    
                </Paginacion>
              </div>  
            </div>:      
            <div className='flex justify-center'>          
              <img  className="object-scale-down  " src="/busqueda.jpg">
              </img>   
            </div>}
</div>
)    
}

