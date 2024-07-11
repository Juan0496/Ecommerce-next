"use client"

import Animacion from './componentes/galeriaAnimada';
import {AnimatePresence, motion} from 'framer-motion';
import React ,{  useState } from 'react';
import {
    Popover,
    PopoverButton,
    PopoverGroup,
  } from '@headlessui/react'  
export default function Portada3(){
const [paginaActual, setPaginaActual] = useState("Mujer")
const [indice, setIndice] = useState(0)
const setearEstados = (sexos,index)=>{
    return(
        setPaginaActual(sexos),
        setIndice(index)
    )
} 
    //const paginas = [...navigation.categories.map((categori)=>categori.name)] ;
    const navigation = {
        paginas:[{
                id: 1,
                sexos: "Mujer",
                urls:{            
                    m1:'/zapamuj4.jpg',
                    m2: '/zapamuj3.jpg',
                    m3: '/zapamuj1.jpg',
                }
                },
                {
                id:2,
                sexos: "Hombre",
                urls:{
                    m1:'/zapahom1.jpg',
                    m2: '/zapahom2.jpg' ,
                    m3: '/zapahom4.jpg',
                }
                }
                ]      
                    }
    const img1= navigation.paginas[indice].urls.m1
    const img2= navigation.paginas[indice].urls.m2
    const img3= navigation.paginas[indice].urls.m3    
return (       
<div className="bg-white grid-rows-* pt-16" >
  <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200">
      <div className="flex h-8 items-center justify-around">            
        <PopoverGroup >
          <div className="flex h-full space-x-28">
            {navigation.paginas.map((pagina,index) =>
            <Popover key={index} className="flex">
                <div className="relative flex ">
                    <PopoverButton
                    className={
                      (pagina.sexos==paginaActual
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800')+''+
                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                        }                        >
                      <a className="border-transparent" onClick={()=>setearEstados(pagina.sexos,index)}>{pagina.sexos}</a>
                    </PopoverButton>
                </div>
            </Popover>)}            
          </div>
        </PopoverGroup>
      </div>    
    </div>      
  </nav>
  <div>    
    <AnimatePresence mode="wait">     
      <motion.div
      key={indice}
      initial={{ x: 100, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0.8 }}
      transition={{ duration: 0.5 }}>  
        <Animacion img1={img1} 
                    img2={img2}
                    img3={img3}
        /> 
      </motion.div> 
    </AnimatePresence>            
  </div>   
</div> 
                    
);
}
