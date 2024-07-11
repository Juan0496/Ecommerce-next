"use client";
import { Fragment, useState } from 'react'
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {  
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
 
} from '@headlessui/react'
import { MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
const filters = [  
  {
    id: 'category',
    name: 'Category',
    options: [      
      { value: "men's clothing", label: 'men clothing'},
      { value: 'jewelery', label: 'jewelery'},
      { value: 'electronics', label: 'electronics'},
      { value: "women's clothing", label: 'women clothing'},      
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '109.95', label: '109'},
      { value: '22.3', label: '22.3', checked: false },
      { value: '55.99', label: '55.99', checked: false },
      { value: '15.99', label: '15.99', checked: false },
      { value: '695', label: '695', checked: false },
      { value: '9.99', label: '9.99', checked: true },
      { value: '10.99', label: '10.99', checked: true },
      { value: '64', label: '64', checked: true },
      { value: '109', label: '109', checked: true },
    ],
  },
]
const filtros= [];  
export default function Filtros() {  
  const pathname= usePathname();
  const {replace} = useRouter();
  const searchParams= useSearchParams();
  const params= new URLSearchParams(searchParams); 
  const handleSearch=(id,term,event)=>{   
    const filt = [id,term]      
    const e= event;       
    if(e)  {     
      filtros.push(filt)      
      params.set('search',filtros);
      console.log(filtros) 
    }     
    if(!e){
      filtros.map((f,i)=>{if(f[1]==term){filtros.splice(i,1)}});       
      console.log(filtros) 
      if(filtros.length==0)            
      params.delete('search');
      else{
        params.set('search',filtros); 
      }
    }    
    params.set('pag','1');    
    replace(`${pathname}?${params.toString()}`)
  }   
  return (
    <div className="bg-white ">
       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">      
         <section aria-labelledby="products-heading" className="pb-24 pt-6">          
           <div className=" gap-x-8 gap-y-10 lg:grid-cols-3">               
             <form className="hidden lg:block">      
              <div className='grid justify-items-center'>      
               <h3>Filtros</h3>           
               </div>
               {filters.map((section) => (
                 <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                   {({ open }) => (
                     <>
                       <h3 className="-my-3 flow-root">
                         <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                           <span className="font-medium text-gray-900">{section.name}</span>
                           <span className="ml-6 flex items-center">
                             {open ? (
                               <MinusIcon className="h-5 w-5" aria-hidden="true" />
                             ) : (
                               <PlusIcon className="h-5 w-5" aria-hidden="true" />
                             )}
                           </span>
                         </DisclosureButton>
                       </h3>
                       <DisclosurePanel className="pt-6">
                         <div className="space-y-4">
                           {section.options.map((option, optionIdx) => (
                             <div key={option.value} className="flex items-center">
                               <input
                                 id={`filter-${section.id}-${optionIdx}`}
                                 name={`${section.id}[]`}
                                 value={`${option.id}[]`}
                                 type="checkbox"
                                 onChange={(event) => {handleSearch(section.id,option.value,event.target.checked)}}
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                               />
                               <label
                                 htmlFor={`filter-${section.id}-${optionIdx}`}
                                 className="ml-3 text-sm text-gray-600"
                               >
                                 {option.label}
                               </label>
                             </div>
                           ))}
                         </div>
                       </DisclosurePanel>
                     </>
                   )}
                 </Disclosure>
               ))}
             </form>                     
           </div>
         </section>
       </main>     
    </div>
  )
}