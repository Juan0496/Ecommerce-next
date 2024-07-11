import Filtros from "../componentes/filtros";
import React, { Suspense } from "react";
import Collage from "./collage";
import FiltroCab from "../componentes/filtroCab";
import {getSession} from "@auth0/nextjs-auth0";

export default async function getInitialProps({searchParams}) {   
   const filtro = searchParams?.search || "";
   const pagAct = searchParams?.pag|| 1;
   const session = await getSession();   
   
    return (      
      <div className="pt-16 flex flex-col md:flex-row bg-white h-max   gap-4"  >         
         <div className="w-max md:h-full h-4 gap-8 " >             
               <Filtros>                  
               </Filtros>          
         </div>         
         <div className="flex flex-col w-max h-full gap-8">    
            <div className=" flex  gap-8  ">
               <FiltroCab>

               </FiltroCab>
            </div >  
            <div >
               <Suspense 
               key={filtro+pagAct}>
                  <Collage filtro={filtro} pag={pagAct}/>
               </Suspense>
            </div>
            
         </div>
      </div>
      
)
}